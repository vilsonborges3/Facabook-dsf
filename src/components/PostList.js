import React, { Component } from 'react';
import Post from './Post';
import '../App.css'

import ioda from '../assets/ioda.jpg'
import vilson from '../assets/vilson.jpg'
import vader from '../assets/vader.jpg'
import julio from '../assets/julio.jpg'


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: julio
        },
        date: "04 Jun 2019",
        content: "Em busca de emprego na área de TI",
        comments: [
          {
            id: 1,
            author: {
              name: "Vilson Borges",
              avatar: vilson
            },
            content: "Há muitas vagas disponiveis em todo o mundo, voce deveria fazer um cadastro no linkedin"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "vilson Borges",
          avatar: vilson
        },
        date: "05 Jun 2019",
        content: "Eu estou estudando JS",
        comments: [
          {
            id: 1,
            author: {
              name: "Lord Vader",
              avatar: vader
            },
            content: "Essa linguagem é apenas para o lado sombrio da força!!! venha comigo e eu ensinarei o caminho."
          },
          {
            id: 2,
            author: {
              name: "Mestre ioda",
              avatar: ioda
            },
            content: "Estudar bem essa linguagem, voce deve, muito boa ela é"
          }
        ]
      },
    ]
  };
      render(){
        return (
          <div id='container'>
              {
                this.state.posts.map( post =>
                    <Post
                    key = {post.id}
                    post = {post}
                    />
                )
              }
          </div>
        )
      }
}

export default PostList;