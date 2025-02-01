import React from 'react'

const ItemBar = ({name, isDone, id, changeDoneStatus, deleteAction}) => {

    return (<>
    <div className={isDone ?'itemBar-dead' :'itemBar-live'}>
        <div onClick={e=> changeDoneStatus(id, !isDone)}>
            {isDone ? `✅ ` : `🔘 `}
            {isDone ? <s>{name}</s> : name}
        </div>
        <div onClick={e=>deleteAction(id)}>
            ❌
        </div>
    </div>


    </>

  )
}

export default ItemBar