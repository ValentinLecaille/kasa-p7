import React from 'react'
import '../../style/Home/FlatCard.css'
import {Link} from 'react-router-dom'

// Le composant Flat défini la carte liée à l'id unique d'un appartement. Le clic envoi l'utilisateur vers l'appartement ayant l'id que l'on passe en state.
function Flat(props) {
  return (
    <Link className='flat-link' 
      to="/flat"
      state = {{
        flatId: props.id
      }}
    >
      <div className='flat-card'>
        <img src={props.imageUrl} alt="" />
        <div className='flat_title'>{props.title}</div>
      </div>
    </Link>
  );
}
 
export default Flat