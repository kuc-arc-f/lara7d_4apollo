import React from 'react'

//
function FlashBox(props) {
//console.log(typeof props.flash.success)
//  if(typeof props.flash.success == 'undefined'){return ""}
  return(
    <div>
      {props.flash.success ? (
        <div className="flash_message bg-success text-white text-center py-3 my-0">
          {props.flash.success}
        </div>
      )
      : ""}      
    </div>
  )
}
export default FlashBox;
