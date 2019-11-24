import React from 'react'
import Scroll from './Ohn/Scroll'

const OhnProvider: React.FC = (props) => {
  return (
    <Scroll>
      {props.children}
    </Scroll>
  )
}

export default OhnProvider
