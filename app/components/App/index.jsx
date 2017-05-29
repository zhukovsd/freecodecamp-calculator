/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Calc from "./Calc";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clickCount: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            ++prevState.clickCount
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <AppBar title="FreeCodeCamp calculator"/>
                    <Calc/>
                </div>
            </MuiThemeProvider>
        );
    }
}