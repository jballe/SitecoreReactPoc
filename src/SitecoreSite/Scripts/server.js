import React from 'react';
import ReactDOMServer from 'react-dom/server'

import Components from './components';


const decorate = (element) => (
    {
        element,
        renderToDOM(props, node) {
            var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
            ReactDOM.render(el, document.getElementById(node));
        },
        renderToString(props) {
            var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
            return ReactDOMServer.renderToString(el);
        },
        renderToStaticMarkup(props) {
            var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
            return ReactDOMServer.renderToStaticMarkup(el);
        },
        getPlaceholders() {
            if (typeof (element) === 'undefined' || typeof (element.placeholders) === 'undefined') {
                return '';
            }

            return JSON.stringify(element.placeholders);
        }
    }
);

var ServersideComponents = {};

for (var name in Components) {
    ServersideComponents[name] = decorate(Conponents(name));
}

export default ServersideComponents;