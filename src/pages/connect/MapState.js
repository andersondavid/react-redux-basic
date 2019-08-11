import React, { Component } from 'react';
import { connect } from 'react-redux'

class MapState extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.myData.map(
                        item => <li>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    myData: state
})

export default connect(MapStateToProps)(MapState);