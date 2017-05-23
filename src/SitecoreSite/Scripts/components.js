import * as FrontendComponents from '../../FrontendComponents';

var Components = [
    FrontendComponents
];

var ComponentsFlattened = {};
Components.map(cmp => {
    for (var key of Object.keys(cmp)) {
        ComponentsFlattened[key] = cmp[key];
    }
});

export default ComponentsFlattened;