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

    renderItems(items) {
        return this.state.items.map(itm => {
            var viewName = null; // TODO: noget med setup :)
            var component = ViewsMap.get(itm.itemType, viewName);
            var props = {
                data: itm,
                key: itm.id
            };
            return React.createElement(component, props);
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