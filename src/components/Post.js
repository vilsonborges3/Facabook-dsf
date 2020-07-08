import React from 'react';

function Post({ post }){
    return (
        <li>
            {post.author.name}
        </li>
    )
}

export default Post;