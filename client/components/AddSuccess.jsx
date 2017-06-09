import React from 'react';
import {addFinish, deletePerson} from '../actions/form'

const AddSuccess = props => {

  console.log("PINEAPPLE",props);
  const{newPerson, dispatch}=props

  const handleAddFinish=()=>{
    alert('Cheers mate! Add another Skuxx!')
    dispatch(addFinish())
  }

  const handleDelete=()=>{
    alert('Tis gone!(not really I am still working on this feature)')
    dispatch(deletePerson())
  }

    return(
    <div>
      <h2>You successfully added a new person dawg!</h2>
      <img src='http://www.reactiongifs.com/r/wfa.gif'></img>
      <h2>The person you added looks like this:</h2>
      <div>
        <p>Name:{newPerson.name}</p>
        <p><img src={`${newPerson.img_url}`}></img></p>
        <p>Skuxx level:{newPerson.level}</p>
      </div>
      <h2>Are you happy with what you added?</h2>
      <button className="button" onClick={handleAddFinish}>Oh yeah</button>
      <button className="button" onClick={handleDelete}>Nah Delete It</button>
    </div>
  )
}

export default AddSuccess
