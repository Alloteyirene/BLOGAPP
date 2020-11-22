import React, {useState} from 'react'
import {v1 as uuid} from 'uuid'


function Blogpost() {
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[content,setContent]=useState("")
    const[date,setDate]=useState('')
    const[post,setPost]=useState([])

    const handleTitle=(event)=>{
        setTitle(event.target.value)
    }
    const handleAuthor=(event)=>{
        setAuthor(event.target.value)
    }
    const handleContent=(event)=>{
        setContent(event.target.value)
    }
    const handleDate=(event)=>{
        setDate(event.target.value)
    }
    const handlePost=(event)=>{
        event.preventDefault()
        setPost([
            ...post,
            {
                id: uuid(),
                title: title,
                content: content,
                author: author,
                date:date
            }
        ])
        setAuthor("")
        setTitle("")
        setContent("")
        setDate('')
    }
    const [increment, setIncrement] =useState(0)
    const [decrement, setDecrement] =useState(0)
    function handleIncrement(){
        setIncrement(increment+1)
    }
    function handleDecrement(){
        setDecrement(decrement+1)}

    //const [delete,setDelete]=useState(false)
    //const [edit,setEdit]=useState(false)
    return (
        <div>
            <form>
                <h3>Title</h3>
                <input value={title} onChange={handleTitle} />
                <h3>Author</h3>
                <input value={author} onChange={(e)=> handleAuthor(e)} />
                <h3>Content</h3>
                <input value={content} onChange={(e)=> handleContent(e)} />
                <h3>Date</h3>
                <input value={date} onChange={(e)=> handleDate(e)}/>
                <input type='submit' onClick={handlePost} />
            </form>
            <ul>
                {post.map((post)=>(
                    <li key={post.id}>
                        {post.title} {post.author} {post.content} {post.date}</li>
                ))
            
            }
            </ul>
            <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{content}</p>
            <h5>{date}</h5>
            </div>

            <button onClick={handleIncrement}>Upvotes</button>
            <h2>{increment}</h2>
            <button onClick={handleDecrement}>Downvotes</button>
            <h2>{decrement}</h2>
           {/* <button onClick={handleDelete(post)}></button>
            <button onClick={handleEdit(post)}></button>*/}
        </div>
    )
}

export default Blogpost
