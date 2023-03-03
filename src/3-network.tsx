
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


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


export default function NetworkReq(){

    const [data, setData] = useState<UserShade[]>([])

    useEffect( ()=>{
       async function fetchData() {
        try{ 
            const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setData(result.data);
        }
        catch (error){
            console.log(error);
        }
       }

       fetchData()
    },[])
    return(
        <>
            <h1>
                Network request
            </h1>

            <ul>
                {data.map((item, index) => <li style={{listStyle:'none'}} key={index}>{item.name}</li>)}
            </ul>
         
        </>
    )
}
