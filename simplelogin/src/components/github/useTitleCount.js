import  { useEffect } from 'react'



const useTitleCount = (count) => {


    useEffect(() => {
        count > 0 ? document.title = `Chats (${count})` : document.title = 'Chats'


    })
}
export default useTitleCount