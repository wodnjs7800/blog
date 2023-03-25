import { useState } from 'react';
import './App.css';

function App() {
  const [change, setChange] = useState(['남자코트 추천' ,'강남 우동맛집', '파이썬독학']);
  const [good, setGood] = useState([0,0,0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(1);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>RactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...change];
        copy[0]='여자코트 추천';
        setChange(copy);
        }}>글수정</button>

      <button onClick={()=>{
        let copy = [...change];
        copy.sort();
        setChange(copy);
        }}>가나다순정렬</button>

      {
        change.map(function(a,i){
          return(
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{a}
               <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...good];
                copy[i]=copy[i]+1;
                setGood(copy);
                }}>👍</span> {good[i]} </h4>
              <p>3월 24일 발행</p>
              <button onClick={()=>{
                let copy = [...change];
                copy.splice(i, 1);
                setChange(copy);
              }}>글삭제</button>
            </div>
          )
        })
      }
        
      <input onChange={(e)=>{setInput(e.target.value)}}></input>
      <button onClick={()=>{
        let copy = [...change];
        copy.unshift(input);
        setChange(copy);
      }}>글생성</button>
      

      {modal === true ? 
        <Modal 
          change={change} title={title}
        /> : null}
      
    </div>
  )
}

function Modal(props){
  return(
    <div className="modal">
      <h4>제목: {props.change[props.title]}</h4>
      <p>날짜: </p>
      <p>상세내용 : </p>
      
    </div>
  )
}

export default App;
