import React from 'react';

const AddSuccess = props => {
  const{newPerson, handleDelete, handleSubmit} = props
  return(
    <div>
      <h2>You successfully added a new person dawg!</h2>
      <img src='http://www.reactiongifs.com/r/wfa.gif'></img>
      <h2>The person you added looks like this:</h2>
      <div>
        <p>Name:{newPerson.name}</p>
        <p>Image:<img src={`${newPerson.img_url}`}></img></p>
        <p>Skuxx level:{newPerson.level}</p>
      </div>
      <h2>Are you happy with what you added?</h2>
      <button onClick={handleSubmit}>Oh yeah</button>
      <button onClick={handleDelete}>Nah Delete It</button>
    </div>
  )
}

export default AddSuccess
