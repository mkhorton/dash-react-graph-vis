import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Graph from 'react-graph-vis';

/**
 * GraphComponent renders a force-directed graph using 
 * react-graph-vis by @crubier and vis.js
 */
export default class GraphComponent extends Component {
    render() {
        const {graph, options, setProps} = this.props;

        return (
            <Graph graph={graph} options={options} />
        );
    }
}

GraphComponent.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A graph that will be displayed when this component is rendered
     */
    graph: PropTypes.object,

    /**
     * Display options for the graph
     */
    options: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
