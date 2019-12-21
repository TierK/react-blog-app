import React, { Component } from 'react'

export default class MainHeader extends Component {
    render() {
        return (
            <div className="MainHeader">
                <img src = {this.props.imgUrl} alt="blog header"/>
            </div>
        )
    }
}
