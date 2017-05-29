/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import InputButtons from "./InputButtons";
import InputField from "./InputField";
import ResultPaper from "./ResultPaper";

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleInput(e, text) {
        // alert('current value = ' + this.state.value + ', input = ' + text);
        this.setState((prevState) => {
            return {value: prevState.value + text};
        });
    }

    handleCalcRequest() {
        alert('answer request from calc');
    }

    handleInputFieldChange(event) {
        // alert(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        this.inputField = <InputField value={this.state.value} onChange={this.handleInputFieldChange.bind(this)} />;

        return (
            <div className="calc">
                <InputButtons onInput={this.handleInput.bind(this)} onCalcRequest={this.handleCalcRequest} />
                <div id="calc-right-column">
                    {this.inputField}
                    <ResultPaper />
                </div>
            </div>
        )
    }
}