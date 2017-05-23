import HttpService from './HttpService';
import URI from 'urijs';

export default class SiteDatasource {

    constructor(data, vars) {
        this.name = "SiteDatasource";
        var rootUrl = (vars || '') + '/api/datasource';
        this.url = URI(rootUrl + '/' + (data ||{}).id);
    }

    get(paging) {
        var url = !paging ? this.url : this.url.query({
            from: paging.from,
            rows: paging.rows
        });
        return HttpService.makeRequest('GET', url);
    }
}
