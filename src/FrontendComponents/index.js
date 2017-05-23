import ViewsMap from '../ComponentFramework.React/ViewsMap';

import SimpleList from './renderings/SimpleList.jsx';
import Views from './entities';

ViewsMap.importRegistrations(Views);

export default {
    SimpleList: SimpleList
};