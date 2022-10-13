import React, { useState, useEffect, useContext } from 'react'
import Loading from '../assets/loading-component/Loading'
import PostCard from './PostCard'
import postContext from '../context/postContext'
const Discuss = () => {

  const [userData, setUserData] = useState({ title: '', description: '' })
  const [serverData, setServerData] = useState([])
  const [loading, setLoading] = useState(false)

 
  const URL = 'http://localhost:2000'
  const getAllPost = async () => {
    setLoading(true)
    const response = await fetch(`${URL}/api/post/getallpost`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let allposts = await response.json()
    setServerData(allposts)
    setLoading(false)
  }

  const createPost = async () => {
    await fetch(`${URL}/api/post/createpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    setUserData({ title: '', description: '' })

    getAllPost()
  }



  const onChange = (e) => {
    console.log(serverData)
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getAllPost()
  }, [])


  return (
    <div className='container margin-top-all'>
      {/* <h1>app status: {obj.status}</h1> */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={userData.title} />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="3" name='description' onChange={onChange} value={userData.description}></textarea>
        <button className="btn btn-primary my-1 text-right" onClick={createPost}>Create Post</button>
      </div>


      <div className="post-card">
        {loading ?
          <div className='text-center'>
            <Loading />
          </div>
          :
          serverData.map((data) => {
            return <PostCard key={data._id} id={data._id} title={data.title} description={data.description} date={(new Date(data.date).toDateString() + "")} getAllPostOnEdit={getAllPost} serverData={serverData} />
          })
        }
      </div>



    </div>
  )
}

export default Discuss