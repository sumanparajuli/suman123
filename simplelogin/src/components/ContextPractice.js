import { CredsContext } from "./context/AuthContext";
import { useContext } from "react";

const ContextPractice = ()=>{
    const {creds , getData}= useContext(CredsContext)
    return (
        <div>hello world {creds.username}  {creds.password}
        <h1>{document.write(getData())}</h1>
        
        </div>
    )
}

export default ContextPractice