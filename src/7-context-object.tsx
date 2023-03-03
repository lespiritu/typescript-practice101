import { createContext, useContext, useState } from "react"

interface studentDetailsShade{
    name: string;
    age: number;
    address: string;
    position:string;
}



const defaultState = {
    name: 'Durant',
    age: 31,
    address: 'Batangas',
    position:"Engineer"
}
const studentContext = createContext<studentDetailsShade>(defaultState)

function StudentContextProvider({children}:{children: React.ReactNode}){

   
    const [student, setStudent] = useState<studentDetailsShade>(defaultState);
 
    return <studentContext.Provider value={student}>{children}</studentContext.Provider> 
}


const useStudentContext = ()=> useContext(studentContext)
export {StudentContextProvider, useStudentContext}