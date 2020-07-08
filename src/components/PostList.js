import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Em busca de emprego na área de TI",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };
      render(){
        return (
            <ul>
              {
                this.state.posts.map( post =>
                  <Post
                  key = {post.id}
                  post = {post}
                  />
                )
              }
            </ul>
        )

      }
}

export default PostList;