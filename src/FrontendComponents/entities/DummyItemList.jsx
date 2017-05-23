import React from 'react';

export default class DummyItemList extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return <a href={this.props.data.url}>{this.props.data.title}</a>
    }

}