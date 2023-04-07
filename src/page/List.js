import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, countGood } from '../store';
import { Link } from "react-router-dom";

function List() {

 let listItem = useSelector((state) => { return state.listItem })
 let dispatch = useDispatch()

 return (
  <div className="list">
   <div className="listleft">
    {
     listItem.map(function (a, i) {
      return (
       <div className="listitem" key={i}>
        <Link to={`/item/${i}`}><h4>{i + 1}.  {a.title}</h4></Link>
        <p onClick={() => { dispatch(countGood({ i })) }}><span>❤</span> {a.count}</p>
        <button className='delete' onClick={() => {
         dispatch(deleteItem({ i }))
        }}>✖</button>
       </div>
      )
     })
    }
   </div>
  </div>
 )
}
export default List;
