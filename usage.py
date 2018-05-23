import dash_react_graph_vis
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

graph = {
    "nodes": [
        {"id": 1, "label": 'Node 1'},
        {"id": 2, "label": 'Node 2'},
        {"id": 3, "label": 'Node 3'},
        {"id": 4, "label": 'Node 4'},
        {"id": 5, "label": 'Node 5'}
    ],
    "edges": [
        {"from": 1, "to": 2},
        {"from": 1, "to": 3},
        {"from": 2, "to": 4},
        {"from": 2, "to": 5}
    ]
}

options = {
    "layout": {
        "hierarchical": True
    },
    "edges": {
        "color": "#000000"
    }
} 

app.layout = html.Div([
    dash_react_graph_vis.GraphComponent(
        id='my_graph',
        graph=graph,
        options=options
    )
], style={'width': '500px', 'height': '500px'})


if __name__ == '__main__':
    app.run_server(debug=True)
