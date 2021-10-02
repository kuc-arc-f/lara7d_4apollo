<?php
// LibPagenate

namespace App\Libs;

//
class LibPagenate{
  var $param1 =1;
  //
  public function init(){
    $this->per_page = 10;
  }
  //
  public function get_page_start($page){
//    $this->init();
    $start_num = ($page -1 ) * $this->per_page;
    $ret = [
      "start"=> $start_num,
      "limit"=> $this->per_page,
    ];
    return $ret;
  }  
  //
  public function is_paging_display($count){
    $ret = 0;
    $num = $count / $this->per_page;
    if($num >= 1){
        $ret = 1;
    }
    return $ret;
  }
  //
  public function get_page_items($data){
    $paginate_disp =$this->is_paging_display(count($data) );
    $page_item = [ "paginate_disp" =>$paginate_disp, ];
    //count($items)
    $param = [
        "docs" => $data,
        "page_item" => $page_item,
    ];
    return $param;
  }
  // get_page_items  
  /*
  public function aa(){
      return;
  }    
  */

}
