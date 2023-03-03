import { useUserContext, UserContextProvider} from "./4-context"
import { DataContextProvider, useDataContext } from "./6-praktice";
import {useState} from 'react'

import { StudentContextProvider, useStudentContext } from "./7-context-object";
function AppNetwork(){

    const {users} = useUserContext();
    return(
        <>
            <h1>
                Network request
            </h1>

            <ul>
                {users.map((item, index) => <li style={{listStyle:'none'}} key={index}>{item.name}</li>)}
            </ul>
         
        </>
    )
}

function DataPractice(){
    
    const {studentName, setStudentName} = useDataContext()
    const [name, setName] = useState<string>('');
    return (
        <>
            <h2>{studentName}</h2>
            <input style={{padding: '10px'}} type='text' placeholder="Input new Name here" value={name} onChange={event => setName(event.target.value)}/>
            <button disabled = {name === '' ? true : false} onClick={()=> setStudentName(name)}>Change Name</button>
        </>
    )
}


function GetStudent(){
    const {name, age, address} = useStudentContext()
    return(
        <div>
                <h1>{name}</h1>
                <p><span style={{backgroundColor:'black', padding:'10px', marginRight:'10px'}}>Age: {age}</span><span style={{backgroundColor:'black', padding:'10px'}}> Address: {address}</span></p>
        </div>
    )
}

export default function AppContext(){
    return(
        <>  
            <UserContextProvider>
                <AppNetwork/>
            </UserContextProvider>

            <DataContextProvider>
                <DataPractice/>
            </DataContextProvider>

            <StudentContextProvider>
                <GetStudent/>
            </StudentContextProvider>
        </>
    )
}