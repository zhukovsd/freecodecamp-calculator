/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

export default class InputField extends React.Component {
    render() {
        return (
            <div className="input-field">
                <TextField
                    value={this.props.value}
                    style={{ fontSize: '25px' }}
                    hintText="Enter expression"
                    fullWidth={true}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                />

                <CircularProgress
                    size={25}
                    style={{
                        position: 'absolute', right: '0', top: '3px',
                        display: this.props.loading ? 'block' : 'none'
                    }}
                />
            </div>
        );
    }
}