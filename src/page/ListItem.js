import './List.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function ListItem() {
 const { id } = useParams();
 let listItem = useSelector((state) => { return state.listItem })

 return (
  <div className="modal">
   <div className="modalitem">
    <h4>{listItem[id].title}</h4><hr />
    <p>{listItem[id].content}</p>
   </div>
  </div>
 )
}
export default ListItem;
