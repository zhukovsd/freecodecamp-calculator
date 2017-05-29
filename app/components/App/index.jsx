/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import Calc from "./Calc";

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <AppBar
                        title="FreeCodeCamp calculator"
                        iconElementRight={
                            <IconButton
                                iconClassName="muidocs-icon-custom-github"
                                linkButton={true} target="_blank"
                                href="https://github.com/zhukovsd/freecodecamp-calculator"
                            />
                        }
                    />
                    <Calc/>
                </div>
            </MuiThemeProvider>
        );
    }
}