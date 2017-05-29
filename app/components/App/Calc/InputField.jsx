/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import TextField from 'material-ui/TextField'

export default class InputField extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value: ''};

        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     // alert(event.target.value);
    //     this.setState({value: event.target.value});
    // }

    render() {
        return (
            <div className="input-field">
                <TextField
                    value={this.props.value}
                    style={{ fontSize: '25px' }}
                    hintText="Enter expression"
                    fullWidth={true}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}