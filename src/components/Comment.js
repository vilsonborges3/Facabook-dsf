import React from 'react';
import '../App.css';

function Comment({ comment }){
    return (
        <div id='commnt'>
            <div id='identifierComent'>
                <div id='divLogo'>
                    <img src={comment.author.avatar} id='logo'/>
                </div>
                <div id='nameAndDate'>
                    <strong>
                        {comment.author.name}
                    </strong> 
                </div>
            </div>
            <div id='contentComment'>
                {comment.content}
            </div>
        </div>        
    )
}

export default Comment;