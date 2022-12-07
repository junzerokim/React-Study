/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = 'Gangnam Noodle Restaurant';
  let [postTitle, setPostTitle] = useState(['Man Coat Recommend', 'Gangnam Noodle Restaurant', 'Python Study']);
  let [likes, setLikes] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {postTitle[0]}{' '}
          <span
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            ❤️{' '}
          </span>
          {likes}
        </h4>
        <p>2022.02.17</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>2022.02.17</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {postTitle[2]}
        </h4>
        <p>2022.02.17</p>
      </div> */}
      {postTitle.map((a, i) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
              }}
            >
              {postTitle[i]}
              <span
                onClick={() => {
                  setLikes(likes + 1);
                }}
              >
                {' '}
                ❤️
              </span>{' '}
              {likes}
            </h4>
            <p>2022.02.17</p>
          </div>
        );
      })}
      {modal === true ? <Modal setPostTitle={setPostTitle} postTitle={postTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[0]}</h4>
      <p>Date</p>
      <p>Detail</p>
      <button
        onClick={() => {
          let copy = [...props.postTitle];
          copy[0] = 'Woman Coat Recommend';
          props.setPostTitle(copy);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;
