var axios = require('axios');
axios.defaults.headers.common['Content-Type'] = 'application/json';
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = window.token;


export default {

    get : function(url) {
        this._request = {
            url    : url,
            method : 'GET',
        };
        return this.call(this._request);
    },

    post : function(url,data) {
        this._request = {
            url    : url,
            method : 'POST',
            data   : data,
        };
        return this.call(this._request);
    },

    patch : function(url,id,data) {
        if ( window._.isUndefined(data) && window._.isObject(id)) {
            data = id;
        }
        else {
            url = url + '/' + id;
        }
        this._request = {
            url    : url,
            method : 'PATCH',
            data   : data,
        };
        return this.call(this._request);
    },

    delete : function(url,id) {
        this._request = {
            url    : url + '/' + id,
            method : 'DELETE',
        };
        return this.call(this._request);
    },

    deletePOST : function(url,data) {
        this._request = {
            url    : url,
            method : 'POST',
            data : data,
        };
        return this.call(this._request);
    },

    call : function(request) {
        if (request.url.substr(0,4)!=='http') {
            request.url = window.api_url + request.url;
        }
        request.crossdomain = true;
        request.transformResponse = function(data) {
            return JSON.parse(data,function (key, value) {
                // if (['startdate','enddate','start','dtstart','until','due_at'].indexOf(key)>=0) {
                //   const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$/; //2020-10-26T10:00:00.000Z
                //   if (typeof value === "string" && dateFormat.test(value)) {
                //     return new Date(value);
                //   }
                // }
                return value;
            });
        };

        return axios.request( request )

            .then(function (response) {
                return response;

            }).catch(function (error) {
                if ( error.toString().indexOf('timeout')>=0 ) {
                    alert( "De server of uw internetverbinding reageert te traag.\nProbeer het nogmaals (door de pagina te herladen).");
                    return Promise.reject({'error':error});
                }
                switch (error.response.status) {
                    case 401:
                    case 419:
                        // Geen rechten, dus naar inlog pagina.
                        window.location = "/login";
                        break;
                    case 429:
                        alert( "De server is overbelast.\nProbeer het later nogmaals (door de pagina te herladen).\n\nNeem contact op met de beheerder als dit euvel zich blijft herhalen.\n\n\n" + error );
                        break;
                    case 404:
                        default:
                        alert( "Er ging iets mis bij het ophalen of verzenden van data.\nNeem contact op met de beheerder als dit euvel zich blijft herhalen.\n\n\n" + error );
                        break;
                }
                return Promise.reject({'error':error});

            }).finally(function () {
                //
            });

    },

};
