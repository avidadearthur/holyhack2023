import React from 'react'

import PropTypes from 'prop-types'

import './background.css'

const Background = (props) => {
  return <div className={`background-background ${props.rootClassName} `}></div>
}

Background.defaultProps = {
  rootClassName: '',
}

Background.propTypes = {
  rootClassName: PropTypes.string,
}

export default Background
