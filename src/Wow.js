import React from 'react'
import {useState} from 'react'
// import App from './App';
//  import './App.css';

function Wow(){
  var [items,setItems]=useState( [{id:1,task:"",checked:false}])
  //
  // JSON.parse(localStorage.getItem('list'))
  function click(ids){
    var newid=items.map((nom)=>nom.id===ids ? {...nom,checked:!nom.checked}:nom)
    setItems(newid)

  }
  function del(id){
    var dell=items.filter(((mk)=>(mk.id!==id)))
    setItems(dell)
  }
  var [newitems,setnewitems]=useState('')
  function additem(task){
    var id=items.length?items[items.length-1].id +1:1 ;
    var addnew={id,checked:false,task}
  var newone=[...items,addnew]
  setItems(newone)
}
  function sub(e){
e.preventDefault()
setnewitems("")
console.log(newitems)
additem(newitems)
}
   
// localStorage.setItem('list',JSON.stringify(setItems))
    
  

return(<main className="wow-container">
   {(items.length===0)? (<p>list is empty</p>):null}
   <form  onSubmit={(e)=>sub(e)}className="task-form"><input placeholder='addtask' onChange={(j)=>setnewitems(j.target.value)} value={newitems} type='text'></input>
   <button type='submit'>add new one</button><label>{newitems}</label>
   </form>
  <ul>
  
      {items.map((item)=>(
       <li key={item.id} 
       onDoubleClick={()=>click(item.id)} className={item.checked ? 'task-item checked' : 'task-item'}
       ><input type='checkbox' checked={item.checked} onChange={()=>click(item.id)} className="task-input"></input><label className='lab' style={(item.checked===true)?{textDecoration:"line-through"}:null}>{item.task}</label>
        
         <button onClick={()=>del(item.id)} className="delete-button">delete</button>
      
       </li> 
        
        ))}
      
  </ul>
<footer>{items.length}{items.length<=1?("item"):"items"}
  
  </footer>
  {/* <App it={items.length}/> */}
</main>)
  

}
export default Wow
