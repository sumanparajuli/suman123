import { useState, useEffect} from 'react'

const UseEffect = () => {
    const url = `https://api.github.com/users/sumanbyte`
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')


    useEffect(()=>{
        fetch(url).then((res)=> res.json())
        .then((user)=> {
            const {login} = user
            setUser(login)
            setIsLoading(false)
        })
        .catch((err)=> console.log(err))
    }, [])


    if(isLoading){
        return <div>
          <h1> Loading....</h1>
            </div>
    }

    if(isError){
        return <div>
          <h1> Error....</h1>
            </div>
    }

    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
}

export default UseEffect
