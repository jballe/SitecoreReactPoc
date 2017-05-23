import DataSourcesMap from './DataSourcesMap.js';
import ViewsMap from './ViewsMap.js';
import SiteDatasource from './SiteDatasource.js';

DataSourcesMap.add(new SiteDatasource().name, SiteDatasource);
DataSourcesMap.defaultDatasourceName = new SiteDatasource().name;

export {
    DataSourcesMap,
    ViewsMap
};