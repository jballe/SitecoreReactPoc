export class DataSourcesMapImpl {

    constructor() {
        this.map = {};
        this.defaultDatasourceName = 'default';
    }

    add(name, dataSource) {
        this.map[name] = dataSource;
    }

    get(dataSourceSpecification) {
        var searchFor = dataSourceSpecification.name || dataSourceSpecification;
        var result = this.map[name] || this.map[this.defaultDatasourceName];
        return result ? new result(dataSourceSpecification) : null;
    }
}

var instance = new DataSourcesMapImpl();
export default instance;