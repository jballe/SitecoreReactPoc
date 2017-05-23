import ViewsMap from '../../ComponentFramework.React/ViewsMap';

import DummyItemList from './DummyItemList.jsx';
import DummyItemDetails from './DummyItemDetails.jsx';

export default [
    ViewsMap.createRegistration(DummyItemList, 'dummy'),
    ViewsMap.createRegistration(DummyItemDetails, 'dummy', 'details')
];