 import Promise from 'core-js/fn/promise';

export class HttpService {
    makeRequest(method, url, dataType, data, withCredentials) {
        dataType = dataType || 'json';
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.withCredentials = !!withCredentials;

            if (dataType == 'form') {
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                var obj = data;
                data = '';
                for (var prop in obj) {
                    if (data !== '') {
                        data += '&';
                    }
                    data += prop + '=' + encodeURIComponent(obj[prop]);
                }
            } else if (dataType == 'json') {
                xhr.setRequestHeader('Content-type', 'application/json');
                data = JSON.stringify(data);
            } else if (dataType == 'xml') {
                xhr.setRequestHeader('Content-type', 'text/xml');
            }

            xhr.onload = function () {
                var validResponse = xhr.status === 200 || xhr.status === 204
                if (!validResponse) {
                    reject(xhr.status);
                }

                if (dataType === "xml") {
                    resolve(xhr.responseXML ? xhr.responseXML.documentElement : null);
                    return;
                }
                if (dataType === "json") {
                    resolve(JSON.parse(xhr.responseText));
                    return;
                }
                else if (validResponse) {
                    resolve(xhr.responseText);
                    return;
                }
                else {
                    reject(Error(xhr.status));
                }
            };
            xhr.onerror = function () {
                reject(Error("An error occurred during HTTP request"));
            };
            xhr.send(data);
        });
    }
};

var instance = new HttpService();
export default instance;