import React, { useState} from 'react'

const PostCard = (props) => {
  const { id, title, description, date, getAllPostOnEdit, serverData} = props
  const URL = 'http://localhost:2000'

  const [isEditClicked, setIsEditClicked] = useState(false)
  const [tobeedited, setToBeEdited] = useState({ title: '', description: '' })

  const onChange = (e) => {
    setToBeEdited({ ...tobeedited, [e.target.name]: e.target.value })
  }
  


  const deletePost = async () => {
    await fetch(`${URL}/api/post/deletepost/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
// showAlert('success', 'post has been deleted')
    getAllPostOnEdit()
  }


  const triggerEdit = (id) => {

    setIsEditClicked(true)
    
    const matchId = serverData.filter((post) => {
      return post._id === id
    })

    matchId.map((item) => {
      setToBeEdited({ title: item.title, description: item.description })
      return item
    })
    
  }

  const triggerSave = async () => {
    await fetch(`${URL}/api/post/editpost/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tobeedited)
    })
    
    setIsEditClicked(false)
    getAllPostOnEdit()
  }

  const goBack = () => {
    setIsEditClicked(false)
  }

  const commentPost = ()=>{
    console.log('I am comment post.')
  }

  

  return (
    <div className="card my-2">
      <div className="card-body">

        {
          !isEditClicked ?
            <>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <button className="btn btn-success btn-sm mx-1" onClick={()=> triggerEdit(id)}>Edit</button>
              <button className="btn btn-danger btn-sm " onClick={deletePost}>Delete</button>
              <button className="btn btn-primary btn-sm " onClick={commentPost}>Comment</button>
              <p className="posted-on text-end">Last edited on {date}</p>
            </>
            :
            <div className=" ">

              <div className="mb-3">
                <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={tobeedited.title} />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="description" rows="3" name='description' onChange={onChange} value={tobeedited.description}></textarea>
              </div>
              <button className="btn btn-success btn-sm mx-1" onClick={triggerSave}>Save Changes</button>
              <button className="btn btn-danger btn-sm mx-1" onClick={goBack}>Go Back</button>

            </div>

        }
      </div>
    </div>
  )
}

export default PostCard