import React  from 'react';
import client from '../../apollo-client'
import Note from '../../graphql/note'
import LibNote from '../../lib/LibNote'

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props)
    this.id = Number(props.match.params.id)
    console.log(this.id);
    const tags = LibNote.get_tags();  
    const category = LibNote.getCategory();
    this.state = {
      id: 0, title: "", content: "", arr_tags: tags, category: category,
      noteTag: []
    };
  }
  async componentDidMount(){
    const data = await client.query({
      query: Note.get_query_item(this.id),fetchPolicy: "network-only"
    })
console.log(data.data)    
    const item = data.data.note;    
    this.setState({
      id: item.id, title: item.title, content: item.content,
      noteTag: item.noteTag,
    })
    if(item.category !== null){
      const elem = document.getElementById('category')
      elem.value = item.category.name
    }    
  }
  /* update */
  async clickHandler(){
    try{
      let noteId = 0;
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const category = document.getElementById('category');
      const arrTags = [];
      this.state.arr_tags.map((item, index) => {
        let elemName = "check_" + index;
        let element = document.getElementById(elemName);
        if(element.checked){
          arrTags.push(item);
        }
      })    
  //console.log("clickHandler: " + title.value)
      let result = await client.mutate({
        mutation: Note.getUpdate(this.id, title.value, content.value)
      }) 
console.log(result)
      if(typeof result.data.noteUpdate.id === "number"){
        noteId = result.data.noteUpdate.id;
        console.log("noteId=", noteId);
      }else{
        alert("Error, note save");
        return;
      }
      // category
      result = await client.mutate({
        mutation: Note.getCategoryAdd(noteId, category.value)
      })    
//console.log(arrTags)
      for (const item of arrTags) {
        result = await client.mutate({
          mutation: Note.getNoteTagAdd(noteId, item)
        })
      }
      alert("Complete, update");
      this.props.history.push("/notes");
    } catch (e) {
      console.error(e);
      throw new Error('Error , delete_movie');
    }    
  }
  /* delete */
  async deleteHandler(){
    const result = await client.mutate({
      mutation: Note.getDelete(this.id)
    })
    console.log(result); 
    alert("Complete, delete");
    this.props.history.push("/notes");
  }
  tagsRow(){
    const self = this;
    const tags = this.state.arr_tags
    return tags.map((item, index) => {
//console.log(item )
      let name = "check_" + String(index)
      let lbl_name = String(item)
      let valid = self.valid_dispCheck(item, self.state.noteTag)
      if(valid){
        return(
        <div className="mt-2" key={index}>
          {lbl_name}
          <input type="checkbox" name={name} id={name} className="mx-2"
          defaultChecked={true} /> {item.name}          
        </div>
        )
      }else{
        return(
        <div className="mt-2" key={index}>
          {lbl_name}
          <input type="checkbox" name={name} id={name} className="mx-2"
            /> {item.name}          
        </div>
        )
      }
    })    
  }
  valid_dispCheck(value, items){
    let ret = false
    items.map((item) => {
//console.log(value, item.name )
      if(item.name === value){
        ret = true
      }
    })    
    return ret
  }      
  render() {
    const category = this.state.category;
console.log(this.state.noteTag)
    return (
      <div className="container py-2">
        <h3>Note - Edit</h3>
        ID : {this.state.id}
        <hr />
        <div className="row">
          <div className="col-md-6">
            <label>Category :</label>
            <select id="category" name="category" className="form-control">
            {category.map((item, index) => {
//console.log(item.name)
              return(<option key={index}
                value={item}>{item}</option>)            
            })}                 
            </select>
          </div>
        </div>        
        <hr />
        <div className="form-group col-md-6 mt-2">
          <label>title:</label>
          <input type="text" name="title" id="title"
          defaultValue={this.state.title} /> 
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>content:</label>
            <input type="text" className="form-control" name="content" id="content"
            defaultValue={this.state.content} />
          </div>
        </div>
        <hr />
        {this.tagsRow()}
        <hr />
        <button onClick={() => {this.clickHandler()}}>
          UpdateTodo
        </button>   
        <hr />   
        <button onClick={() => {this.deleteHandler()}}>
          DeleteTodo
        </button>
      </div>
    );
  }
}

