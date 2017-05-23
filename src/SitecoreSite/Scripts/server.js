import React from 'react';

import Components from './components';

const createData = (props) => {
    var res = {};

    if (typeof (props) === 'undefined') {
        return {};
    }

    if (typeof (props.data) != 'undefined') {
        res['data'] = props.data;
    }

    if (typeof (props.placeholders) != 'undefined') {
        res['placeholders'] = props.placeholders;
    }

    return res;
}

// ReSharper disable once InconsistentNaming
const decorate = (ElementComponent) => (
    {
        ElementComponent,
        renderToDOM(props, node) {
            var div = document.createElement('div');
            div.innerHTML = new ElementComponent(createData(props)).render();;
            document.getElementById(node).appendChild(div);
        },
        renderToString(props) {
            return new ElementComponent(createData(props)).render();
        },
        renderToStaticMarkup(props) {
            return new ElementComponent(createData(props)).render();
        },
        getPlaceholders() {
            if (typeof (ElementComponent) === 'undefined'
                || typeof (ElementComponent.placeholders) === 'undefined') {
                return '';
            }

            return JSON.stringify(ElementComponent.placeholders);
        }
    }
);

export const SimpleList = decorate(Components.SimpleList);