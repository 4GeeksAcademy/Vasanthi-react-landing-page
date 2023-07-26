import React from 'react';
import propTypes from 'prop-types'
const Card = (props) => {
  return (
    <div className="card m-2">
      <div className='img'>

        <img src={props.image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title fs-3">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div class="card-footer text-muted d-flex justify-content-center">
        <a href="#" className="btn btn-primary">Start Movie</a>
      </div>
    </div>
  )
}
Card.propTypes = {
  name: propTypes.string
}

export default Card