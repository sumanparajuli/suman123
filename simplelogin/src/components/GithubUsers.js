import React, { useEffect, useState } from 'react'
import Loading from './loading/Loading'
import { FcApproval } from "react-icons/fc"

const GithubUsers = () => {
    const [userdata, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getData = async () => {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setUserData(data)
        setIsLoading(false)
    }


    useEffect(() => {
        // eslint-disable-next-line
        getData()
    }, [])

    return (
        <>
        {/* <h1>App Built By:</h1> */}
            <h1 style={{ "textAlign": "center" }}>Github Users</h1>
            <div className='container-github'>
                { isLoading ? <Loading/>:
                    userdata.map((currElem) => {
                        // console.log(currElem)
                        return <>
                            <div className="github-user" key={currElem.avatar_url}>
                                <p style={{ "textAlign": "center" }}>{currElem.login}<FcApproval /></p>
                                
                                <div className="github-image">
                                    <img src={currElem.avatar_url} alt='github user' width={200} />
                                </div>
                                <div className="github-fss">
                                    <button className='btn'><a href={currElem.followers_url}>Followers</a></button>
                                    <button className='btn'><a href={currElem.following_url}>Following</a></button>
                                    <button className='btn'><a href={currElem.starred_url}>Starred</a></button>
                                </div>
                                <button className='btn' ><a href={currElem.url} target="_blank" rel='noreferrer'>View Profile</a></button>


                            </div>

                        </>
                    })
                }
            </div>

        </>
    )
}

export default GithubUsers