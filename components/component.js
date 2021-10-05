import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`app-component-container ${props.rootClassName} `}>
        <span>{props.Test}</span>
      </div>
      <style jsx>
        {`
          .app-component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  Test: 'Test',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  Test: PropTypes.string,
}

export default AppComponent
