// useState
import './App.css'
import { useRef, useState } from "react";

interface TodoShade{
    id:number;
    text:string;
}


interface AddItemProps{
    handleClick: (text: TodoShade['text'])=>void;
}
function AddItem({handleClick}:AddItemProps){

    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <div className="add-todo" style={{display:"flex", padding:'10px', gap:'10px'}}>
            <input style={{padding:'12px', width:'60%', backgroundColor:'silver', border:'none', color:'#0e131b'}} type="text" ref = {inputRef} placeholder="Insert to do item"/>
            <button style={{width:"40%", backgroundColor:'#004e93'}} onClick={()=>{
                if(inputRef.current && inputRef.current.value){
                    handleClick(inputRef.current.value)
                    inputRef.current.value = "";
                }
            }}>Add Todo</button>
        </div>
    )
}

function App(){
    const [item, setItem] = useState<TodoShade[]>([])

    function remove(id:TodoShade['id']){
        setItem(item.filter(item=> item.id !== id) )
        
    }

    function handleClick(text:TodoShade['text']){
        return setItem([...item, {text, id:item.length + 1}])
    }


    return(
        
        <div className="App" style={{padding:'20px', backgroundColor:'#0e131b'}}>
            <h1>You have {item.length} todos</h1>
            <ul style={{textAlign:'left', listStyle:'none',padding:'10px'}}>
                {
                    item.map((item, index)=> {
                        return <li style={{backgroundColor:'#273036', display:'flex',alignItems:'center', justifyContent:'flex-start', padding:'10px', borderBottom:'1px solid grey'}} key={index}>
                            <span> {item.text}</span>
                            <button style={{marginLeft:'auto', borderRadius:'80px', height:'40px', width:'40px', position:'relative',padding:'0'}} onClick={()=> remove(item.id)}><span style={{position:'absolute',lineHeight:'40px', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>x</span></button>
                        </li>
                    })
                }
            </ul>

            <AddItem handleClick={handleClick}/>
        </div>
    )
}

export default App;