/**
 * Created by zhukovsd on 29.05.2017.
 */

import React from 'react';
import Paper from 'material-ui/Paper';

export default class ResultPaper extends React.Component {
    render() {
        return (
            <div className="result-paper">
                <Paper id="test" style={{height: '100%',}} zDepth={1} />
            </div>
        );
    }
}