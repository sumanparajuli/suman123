import { useState } from 'react'
import { useQuery , useMutation} from 'react-query'
import Post from './components/Post'
import client from './components/react-query-client'

const fetcher = (url, body) => fetch(url, {
  method: 'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body: JSON.stringify(body)
})


function App() {
  const [tempLang, setTempLang] = useState()

  const mutation = useMutation((body)=> fetcher('/api/create-record', body), {
    onSuccess(data){
        console.log('got response from backend ', data)
    }, onError(error){
      console.log('got error from backend', error)
    }
  })

  const {data: favLangs, isLoading, isError} = useQuery(['favLangs'], ()=>{
    return fetch('/api/get-records').then(t=>{t.json()})
  } , {
    select: data => data.lang
  })

  if(isLoading){
    return <h1>Is loading.......</h1>
  }
  if(isError){
    return <h1>Error.......</h1>
  }

   async function callMutation(){
    mutation.mutate({record: tempLang})
  }

  return (
    <div className='App'>
        <h1>Some fav language</h1>
        {favLangs.map(lang=>{
             return <li key={lang}>{lang}</li>
        })}
        <input type="text" value={tempLang} onChange={e=> setTempLang(e.target.vlaue)}/>
        <p onClick={callMutation}>Submit</p>
    </div>
  )
}
export default App;
