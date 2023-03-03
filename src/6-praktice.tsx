import { createContext, useContext, useState } from "react"

interface dataShade{
    studentName:string;
    setStudentName: (value: string)=>void;
}

const DataContext = createContext<dataShade>({studentName: '', setStudentName:()=>{}})
function DataContextProvider({children}: {children: React.ReactNode}){

    const [studentName, setStudentName] = useState<string>("Lebron James");
    return <DataContext.Provider value={{studentName, setStudentName }}>{children}</DataContext.Provider>
}

function useDataContext(){
    return useContext(DataContext)
}
export { DataContextProvider, useDataContext}