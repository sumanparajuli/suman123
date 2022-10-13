import React from 'react'
import { useQuery } from 'react-query'

const fetcher = url => fetch(url).then(res => res.json())

const Post = ({ postID, goBack }) => {

    const { data, isLoading } = useQuery(['post', postID], () => fetcher(`https://jsonplaceholder.typicode.com/posts/${postID}`), {
        staleTime: 10000
      })

    if (isLoading) { return <h2>Loading Post.........</h2> }

    console.log(data)

   

    return (
        <>
            <h1>Post id: {postID}</h1>
            <p>Post Title: {data.title}</p>
            <p>Post Body: {data.body}</p>
            <a href="#" onClick={goBack}>Go Back</a>
        </>
    )
}

export default Post