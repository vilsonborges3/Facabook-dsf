import React from 'react';
import '../App.css'

function Post({ post }){
    return (
        <div>
            <div>
                <p>
                    <strong >{post.author.name}<br></br></strong>
                    
                    <small id='textdate'>{post.date}</small> 
                </p>
            </div>
            

            <img src={post.author.avatar} id='logo'/>
        </div>         
    )
}

export default Post;