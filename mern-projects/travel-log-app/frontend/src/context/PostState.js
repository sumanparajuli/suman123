import PostContext from "./postContext";
import { useState } from "react";
const PostState = (props)=>{
    const URL = 'http://localhost:2000'
    const [allPosts, setAllPosts] = useState(null)

    const postget = async ()=>{
        const response = await fetch(`${URL}/api/post/getallpost`)
        const data = response.json()
        setAllPosts(data)
    }


    return(
    <PostContext.Provider value={{allPosts, postget}}>
            {props.children}
        </PostContext.Provider>

    )

}

export default PostState