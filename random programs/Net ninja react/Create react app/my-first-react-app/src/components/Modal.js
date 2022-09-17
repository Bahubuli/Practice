import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'
export default function modal({ children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
      <div className="modal-backdrop">

          <div className="Modal" style={
              {
                  border: "4px solid",
                  borderColor: "#ff4500",
                  textAlign:"center"
              }}>

              {children}
              <button onClick={handleClose}
                  className={isSalesModal ? "sales-btn" : ""}> close</button>
          </div>
      </div>
  ), document.body)
}
