import React from 'react';
import ReactDOM from 'react-dom';

import Components from '../index';

Array.prototype.forEach.call(document.querySelectorAll('[data-react]'), function (node) {
    var componentName = node.getAttribute('data-react');
    var propAttribute = node.getAttribute('data-props');
    var props = propAttribute ? JSON.parse(propAttribute) : {};

    var component = Components[componentName];
    if (component) {
        ReactDOM.render(React.createElement(Components[componentName], props), node);
    } else {
        console.warn('There is no compont named ' + componentName);
    }
});