import React from 'react'

import RegForm from './form'

class Reg extends React.Component {
  state = {
    form: {
      getFieldProps: null
    }
  }

  render() {
    return (
      <div>
        <RegForm {...this.state} />
      </div>
    )
  }
}

export default Reg
