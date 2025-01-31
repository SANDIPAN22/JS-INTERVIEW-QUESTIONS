import {  useState } from 'react'
import './App.css'
import Modal from './components/Modal'

const App = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  return (<>
    
    <button className='action-buttons' onClick={(e) => { setIsSubmitModalOpen(true)}}>Submit Data</button>
    <button className='action-buttons' onClick={(e) => { setIsDeleteModalOpen(true)}}>Delete Data</button>


    {/* -------------------------------------Modals setUp-------------------------------- */}

    {isSubmitModalOpen && <Modal 
    title="Are you ready to submit ?" 
    body={"This example opens a modal dialog when the \"Show the dialog\" button is activated. The dialog contains a form with a <select> and two <button> elements, which default to type=\"submit\"."} 
    closeAction={()=>setIsSubmitModalOpen(false)}
    btnConfigs={[{'text': 'Close', 'cssClass': 'btn-error', 'action': ()=>{setIsSubmitModalOpen(false)}}, 
      {'text': 'Submit', 'cssClass': 'btn-success', 'action': ()=>{alert("Submitted !!!")}}
    ]}/>}

    {isDeleteModalOpen && <Modal 
    title="Are you ready to Delete ?" 
    body={"This example opens a modal dialog when the \"Show the dialog\" button is activated. The dialog contains a form with a <select> and two <button> elements, which default to type=\"submit\"."} 
    closeAction={()=>setIsDeleteModalOpen(false)}
    btnConfigs={[{'text': 'Close', 'cssClass': 'btn-error', 'action': ()=>{setIsDeleteModalOpen(false)}}, 
      {'text': 'Pending', 'cssClass': 'btn-pending', 'action': ()=>{alert("Pssst !!!")}},
      {'text': 'Delete', 'cssClass': 'btn-success', 'action': ()=>{alert("Deleted !!!")}}
    ]}/>}
    
  
  
  </>)
}

export default App