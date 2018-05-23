from setuptools import setup

exec (open('dash_react_graph_vis/version.py').read())

setup(
    name='dash_react_graph_vis',
    version=__version__,
    author='mkhorton',
    packages=['dash_react_graph_vis'],
    include_package_data=True,
    license='MIT',
    description='A plot.ly Dash component using react-graph-vis by @crubier which uses vis.js to draw force-directed graphs.',
    install_requires=[]
)
