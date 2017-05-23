import React from 'react';
import { DataSourcesMap, ViewsMap } from '../../ComponentFramework.React';

export default class SimpleList extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = { items: [] };
    }

    componentDidMount() {
        this.datasource = DataSourcesMap.get(this.props.datasource);
        var promise = this.datasource.get(this.props.paging);
        promise.then(resultmodel => {
            var state = this.state;
            state.items = resultmodel.items;
            this.setState(state);
        });
    }

    renderItems() {
        return this.state.items.map(itm => {
            var viewName = this.props.setup && this.props.setup.views ?
                this.props.setup.views[itm.itemType] || this.props.setup.views['common'] : null;
            var component = ViewsMap.get(itm.itemType, viewName);
            var props = {
                data: itm,
                key: itm.id
            };
            return React.createElement('li', {},
                React.createElement(component, props)
            );
        });
    }

    render() {
        return <section>
            <h2>{this.props.title}</h2>
            <ul>
                {this.renderItems()}
            </ul>
        </section>;
    }

    componentWillUnmount() {

    }
}