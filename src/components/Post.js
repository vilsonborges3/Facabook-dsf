import React from 'react';
import '../App.css'
import Comment from './Comment';

function Post({ post }){
    return (
        <div id='post'>
            <div id='photoAndName'>
                <div id='divLogo'>
                    <img src={post.author.avatar} id='logo'/> 
                </div>  

                <div id='nameAndDate'>
                    <p>
                        <strong >{post.author.name}<br></br></strong>
                            
                        <small id='textdate'>{post.date}</small> 
                    </p>
                </div>
            </div>
            <div>{post.content}</div>
            
            {
                post.comments.map( comment => 
                    <Comment 
                        key={comment.id}
                        comment={comment}
                    />
                    )
            }
        </div>         
    )
}

export default Post;