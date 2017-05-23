import React from 'react';

export default class DummyItemDefault extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        <section className="details dummy-item">
            <h1>{this.props.data.title}</h1>
            <p>And some nice details</p>
        </section>
    }

}