import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
    <Post/>
    <Title/>
  </div>
);

function App(){
  return (
    <div>
      <h1>Text</h1>
      <p>Text</p>
    </div>
  )
}

function Post(){
  return (
    <p>My post</p>
  )
}

function Title(){
  return (
    <div>
      <h1>Title</h1>
    </div>
  )
}