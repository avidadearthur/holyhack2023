import React from 'react'

import PropTypes from 'prop-types'

import './speaker.css'

const Speaker = (props) => {
  return (
    <div className={`speaker-speaker ${props.rootClassName} `}>
      <img alt="image" src={props.Image} className="speaker-image" />
      <div className="speaker-deails">
        <h3 className="speaker-name">{props.Name}</h3>
        <div className="speaker-position">
          <div className="speaker-point"></div>
          <span className="speaker-caption">{props.Detail}</span>
        </div>
      </div>
    </div>
  )
}

Speaker.defaultProps = {
  rootClassName: '',
  Detail: 'CEO, Opary',
  Name: 'Samantha Johnson',
  Image: '/playground_assets/speakers-1-1500w.png',
}

Speaker.propTypes = {
  rootClassName: PropTypes.string,
  Detail: PropTypes.string,
  Name: PropTypes.string,
  Image: PropTypes.string,
}

export default Speaker
