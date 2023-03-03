
import './App.css'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'


export interface UserShade {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}







export interface ContextResult{
    users:UserShade[]
}

const userContext = createContext<ContextResult>({users: []})
function UserContextProvider({children}: {children:React.ReactNode}){

    const [users, setUsers] = useState<UserShade[]>([])
    useEffect( ()=>{
       async function fetchData() {
        try{ 
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(result.data);
        }
        catch (error){
            console.log(error);
        }
       }

       fetchData()
    },[])

    return <userContext.Provider value={{users}}>{children}</userContext.Provider> 
    
}

const useUserContext = ()=>{
    return  useContext(userContext)
}

export {useUserContext, UserContextProvider};

function ChildComponent(){

   const {users} = useUserContext()
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


export default function NewAPPP(){
    return(
        <>
        <UserContextProvider>
        <ChildComponent/>
        </UserContextProvider>
        </>
    )
}