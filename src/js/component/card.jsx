import React from 'react';
import propTypes from 'prop-types'
const Card = (props) => {
  return (
    <div className="card m-2">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Start Movie</a>
      </div>
    </div>
  )
}
Card.propTypes = {
  name: propTypes.string
}

export default Card