import React, { Component } from 'react'

export default class ColorBox extends Component {
    colorHandler(color){
     this.props.onColor(color)
    }
    render() {
        let {color} = this.props
        return (
            <div className='color-box' onClick={this.colorHandler.bind(this,color)} style={{backgroundColor: color}}>
                
            </div>
        )
    }
}
