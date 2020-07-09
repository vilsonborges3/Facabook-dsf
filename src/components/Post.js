import React from 'react';
import '../App.css'

function Post({ post }){
    return (
        <div id='post'>
            <div id='divLogo'>
                <img src={post.author.avatar} id='logo'/> 
            </div>  

            <div id='nameAndDate'>
                <p>
                    <strong >{post.author.name}<br></br></strong>
                        
                    <small id='textdate'>{post.date}</small> 
                </p>
            </div>
            <p>
                {post.content}
            </p>
            
        </div>         
    )
}

export default Post;