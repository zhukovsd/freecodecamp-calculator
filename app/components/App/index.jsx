/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Calc from "./Calc";

export default class App extends React.Component {
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