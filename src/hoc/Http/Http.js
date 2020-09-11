function Http() {
    this.BaseUrl = 'https://api.punkapi.com/v2/'

    this.get = function(url, params) {
        return fetch(this.BaseUrl + url + '?' + getQueryString(params), {
            method: "GET",
            qs: params,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }
}
function getQueryString(params) {
    var esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}
export default new Http()