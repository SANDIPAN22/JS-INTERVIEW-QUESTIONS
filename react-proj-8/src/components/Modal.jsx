import React from 'react'

const Modal = ({title, body,closeAction, btnConfigs}) => {
  return (
    <div className="modal-overlay" onClick={closeAction}>
        <div className='container-modal' onClick={e=>e.stopPropagation()}>
            <div id="modal-title">
                    {title}
            </div>
            <div id="modal-margin"></div>
            <div id="modal-body">
                    {body}
            </div>
            <div id="modal-margin"></div>
            <div id="modal-btns">
                {btnConfigs.map(b => <button className={`modal-btn ${b.cssClass}`} onClick={b.action}>{b.text}</button>)}
            </div>
        </div >
    </div>
  )
}

export default Modal