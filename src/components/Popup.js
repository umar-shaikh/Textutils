import React from 'react'

export default function Popup(props) {
  const capitalize =(word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
  return (

   

   props.popup && <div className={`alert alert-${props.popup.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize (props.popup.type)}</strong> : {props.popup.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}
