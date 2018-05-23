import React from 'react';
import {shallow} from 'enzyme';
import GraphComponent from '../GraphComponent.react';

describe('GraphComponent', () => {

    it('renders', () => {
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
        const component = shallow(<GraphComponent graph={graph} options={options}/>);
        expect(component).to.be.ok;
    });
});
