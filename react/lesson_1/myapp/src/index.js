import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ProductCard/>
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

function ProductCard(){
  const rand = Math.random()
  let myVar;
  (rand < 0.5) ? myVar = 'less' : myVar = 'more'
  return (
    <div>
      <h2>Товар</h2>
      <p>Desc</p>
      <p>100 y.e.</p>
      <button>Добавить в корзину</button>
      <p>{new Date().toDateString()}</p>
      <p>{myVar}</p>
      {/* <p>Value: {rand}, text: {myVar}</p> */}
      <ButtonsPanel
        addText = 'Add to Cart'
        dropText = 'Remove from Cart'
        rand={rand}
      />
      {
        (rand < 0.5) ? <p>Value: {rand}, text: {myVar}</p> : null 
      }
    </div>
  )
}

function ButtonsPanel(props){
  return (
    <div>
      <button>{props.addText}</button>
      {/* <button>{props.dropText}</button> */}
      {/* <p>{props.rand}</p> */}
      {
        (props.rand < 0.5) ? <button>{props.dropText}</button> : null
      }
    </div>
  )
}