import { useState } from 'react';
import './Write.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';
import { Link } from "react-router-dom";

function ListItem() {

 let dispatch = useDispatch()
 const [input, setInput] = useState('');
 const [inputc, setInputc] = useState('');

 return (
  <div className="form">
   <input
    className="formtitle"
    placeholder='제목을 입력해주세요'
    maxlength="15"
    onChange={(e) => { setInput(e.target.value) }}></input>
   <textarea
    className="formcontent"
    placeholder='내용을 입력해주세요'
    onChange={(e) => { setInputc(e.target.value) }}></textarea>
   <Link to="/">
    <button className="formbutton" onClick={() => {
     if(input.length>0) dispatch(addItem({ title: input, content: inputc, count: 0 }))
   }}>글생성</button>
   </Link>
  </div>
 )
}
export default ListItem;
