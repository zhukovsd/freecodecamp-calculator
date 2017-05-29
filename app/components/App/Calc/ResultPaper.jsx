/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import Paper from 'material-ui/Paper';

export default class ResultPaper extends React.Component {
    render() {
        return (
            <div className="result-paper">
                <Paper style={{height: '100%', padding: '10px', overflow: 'auto'}} zDepth={1}>
                    <img
                        id="result-image"
                    />
                </Paper>
            </div>
        );
    }
}