import React, { Component } from 'react';
import { connect } from 'react-redux'

class MapDispatch extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
    }
  }
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.setState({ newItem: e.target.value })} />
        <button onClick={() => (
          this.props.changeText({
            type: 'ADD_TEXT',
            newItem: this.state.newItem
          })
        )}>Add new item</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeText: object => dispatch(object)
  }
}

export default connect(null, mapDispatchToProps)(MapDispatch);
