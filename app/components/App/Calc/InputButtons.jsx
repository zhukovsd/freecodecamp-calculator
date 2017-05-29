/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class InputButtons extends React.Component {
    // handleInputClick(e, text) {
    //     alert(text);
    // }

    render() {
        const buttons = [
            '1', '2', '3', '+',
            '4', '5', '6', '-',
            '7', '8', '9', '*',
            'r', '0', ',', '/',
            '(', ')', {label: 'Answer', double: true, primary: true}
        ];

        const buttonStyle = {minWidth: '60px', width: '60px', height: '60px', margin: '5px'};
        const labelStyle = {fontSize: '20px', lineHeight: buttonStyle.height};

        const controls = buttons.map((button) => {
            const style = Object.assign({}, buttonStyle);
            if (button.double) style.width = '130px';

            const primary = button.primary === true;

            const label = (typeof(button) === 'string') ? button : button.label;
            const text = label;

            const onClick = !primary ? (e) => this.props.onInput(e, text) : this.props.onCalcRequest;

            return <RaisedButton
                className="input-button"
                label={label} style={style}
                labelStyle={labelStyle}
                primary={primary}
                onClick={onClick}
            />
        });

        return (
            <div className="input-buttons">
                {controls}
            </div>
        );
    }
}