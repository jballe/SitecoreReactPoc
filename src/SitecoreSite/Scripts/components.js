import FrontendComponents from '../../FrontendComponents';

var Components = [
    FrontendComponents
];

var ComponentsFlattened = {};
Components.map(cmp => {
    for (var key of Object.keys(cmp)) {
        ComponentsFlattened[key] = Components[key];
    }
});

export default ComponentsFlattened;