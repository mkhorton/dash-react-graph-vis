import React, {Component} from 'react';
import {GraphComponent} from '../src';

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {

        const graph = {
            nodes: [
                {id: 1, label: 'Node 1'},
                {id: 2, label: 'Node 2'},
                {id: 3, label: 'Node 3'},
                {id: 4, label: 'Node 4'},
                {id: 5, label: 'Node 5'}
            ],
            edges: [
                {from: 1, to: 2},
                {from: 1, to: 3},
                {from: 2, to: 4},
                {from: 2, to: 5}
            ]
        }

        const options = {
            layout: {
                hierarchical: true
            },
            edges: {
                color: '#000000'
            }
        }

        return (
            <div>
                <h1>dash-react-graph-vis Demo</h1>

                <hr/>
                <h2>GraphComponent</h2>
                <GraphComponent
                    graph={graph}
                    options={options}
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
