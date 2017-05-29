/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import $ from 'jquery';

import InputButtons from "./InputButtons";
import InputField from "./InputField";
import ResultPaper from "./ResultPaper";

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', loading: false};
    }

    handleInput(e, text) {
        // alert('current value = ' + this.state.value + ', input = ' + text);
        this.setState((prevState) => {
            return {value: prevState.value + text};
        });
    }

    handleCalcRequest() {
        const url = (`http://m.loviotvet.ru/calc?Expr=${encodeURIComponent(this.state.value)}&aunit=deg&fheight=17&Detail=1&clientid=vkcalc&lang=en`);

        const image = $('#result-image');
        const paper = $('.result-paper');

        this.setState({loading: true});
        image.attr('src', url).on('load', () => {
            if (image.height() + 35 > 292) {
                paper.innerHeight(image.height() + 45);
            } else {
                paper.height(292);
            }

            this.setState({loading: false});
        });
    }

    handleInputFieldChange(event) {
        // alert(event.target.value);
        this.setState({value: event.target.value});
    }

    handleInputFieldKeyPress(event) {
        // alert('hi' + event.key);
        if(event.key === 'Enter'){
            this.handleCalcRequest();
        }
    }

    render() {
        return (
            <div className="calc">
                <InputButtons
                    onInput={this.handleInput.bind(this)}
                    onCalcRequest={this.handleCalcRequest.bind(this)}
                />

                <div id="calc-right-column">
                    <InputField
                        value={this.state.value}
                        loading={this.state.loading}
                        onChange={this.handleInputFieldChange.bind(this)}
                        onKeyPress={this.handleInputFieldKeyPress.bind(this)}
                    />

                    <ResultPaper />
                </div>
            </div>
        )
    }
}