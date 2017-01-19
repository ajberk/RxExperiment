import React, {Component} from 'react';

export default class CoolDiv extends Component {
    render() {
        const {color} = this.props;
        const style = {"backgroundColor": color};
        return (
            <div className="special" style={style}></div>
        )
    }
}