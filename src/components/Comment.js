import React from 'react';
import '../App.css'

function Comment({ comment }){
    return (
            <div>
                {comment.author.name}
            </div>    
    )
}

export default Comment;