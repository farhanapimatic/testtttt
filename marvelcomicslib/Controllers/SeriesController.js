/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('SeriesController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', SeriesController
    ]);

    function SeriesController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getSeriesIndividual
             *
             * @param {string} seriesId Filter by series title.
             *
             * @return {promise<Series>}
             */
            getSeriesIndividual: function (seriesId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * getCharacterSeriesCollection
             *
             * @param {string} characterId The character ID
             * @param {string|null} comics [Optional] Return only series which contain the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} contains [Optional] Return only series containing one or more comics with the
             * specified format. (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {string|null} creators [Optional] Return only series which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only series which have comics that take place during
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only series which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "title",
             * "modified", "startYear", "-title", "-modified", "-startYear")
             * @param {string|null} seriesType [Optional] Filter the series by publication frequency type.
             * (Acceptable values are: "collection", "one shot", "limited",
             * "ongoing")
             * @param {string|null} startYear [Optional] Return only series matching the specified start year.
             * @param {string|null} stories [Optional] Return only series which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Filter by series title.
             * @param {string|null} titleStartsWith [Optional] Return series with titles that begin with the
             * specified string (e.g. Sp).
             *
             * @return {promise<SeriesDataWrapper>}
             */
            getCharacterSeriesCollection: function (characterId,
                comics,
                contains,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                seriesType,
                startYear,
                stories,
                title,
                titleStartsWith)
            {
                // Assign default values
                contains = contains || 'comic';
                orderBy = orderBy || 'title';
                seriesType = seriesType || 'collection';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/characters/{characterId}/series';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'characterId': characterId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'contains': (contains !== null) ? contains : 'comic',
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'title',
                    'seriesType': (seriesType !== null) ? seriesType : 'collection',
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesDataWrapperModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else if (_result.code === 409) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Limit greater than 100.',
                            errorCode: 409,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * getCreatorSeriesCollection
             *
             * @param {string} creatorId The creator ID.
             * @param {string|null} characters [Optional] Return only series which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only series which contain the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} contains [Optional] Return only series containing one or more comics with the
             * specified format. (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {string|null} events [Optional] Return only series which have comics that take place during
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only series which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "title",
             * "modified", "startYear", "-title", "-modified", "-startYear")
             * @param {string|null} seriesType [Optional] Filter the series by publication frequency type.
             * (Acceptable values are: "collection", "one shot", "limited",
             * "ongoing")
             * @param {string|null} startYear [Optional] Return only series matching the specified start year.
             * @param {string|null} stories [Optional] Return only series which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Filter by series title.
             * @param {string|null} titleStartsWith [Optional] Return series with titles that begin with the
             * specified string (e.g. Sp).
             *
             * @return {promise<SeriesDataWrapper>}
             */
            getCreatorSeriesCollection: function (creatorId,
                characters,
                comics,
                contains,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                seriesType,
                startYear,
                stories,
                title,
                titleStartsWith)
            {
                // Assign default values
                contains = contains || 'comic';
                orderBy = orderBy || 'title';
                seriesType = seriesType || 'collection';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators/{creatorId}/series';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'creatorId': creatorId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'contains': (contains !== null) ? contains : 'comic',
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'title',
                    'seriesType': (seriesType !== null) ? seriesType : 'collection',
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesDataWrapperModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else if (_result.code === 409) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Limit greater than 100.',
                            errorCode: 409,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * getEventSeriesCollection
             *
             * @param {string} eventId The event ID.
             * @param {string|null} characters [Optional] Return only series which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only series which contain the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} contains [Optional] Return only series containing one or more comics with the
             * specified format. (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {string|null} creators [Optional] Return only series which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only series which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "title",
             * "modified", "startYear", "-title", "-modified", "-startYear")
             * @param {string|null} seriesType [Optional] Filter the series by publication frequency type.
             * (Acceptable values are: "collection", "one shot", "limited",
             * "ongoing")
             * @param {string|null} startYear [Optional] Return only series matching the specified start year.
             * @param {string|null} stories [Optional] Return only series which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Filter by series title.
             * @param {string|null} titleStartsWith [Optional] Return series with titles that begin with the
             * specified string (e.g. Sp).
             *
             * @return {promise<SeriesDataWrapper>}
             */
            getEventSeriesCollection: function (eventId,
                characters,
                comics,
                contains,
                creators,
                limit,
                modifiedSince,
                offset,
                orderBy,
                seriesType,
                startYear,
                stories,
                title,
                titleStartsWith)
            {
                // Assign default values
                contains = contains || 'comic';
                orderBy = orderBy || 'title';
                seriesType = seriesType || 'collection';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}/series';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'contains': (contains !== null) ? contains : 'comic',
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'title',
                    'seriesType': (seriesType !== null) ? seriesType : 'collection',
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesDataWrapperModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else if (_result.code === 409) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Limit greater than 100.',
                            errorCode: 409,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * getSeriesCollection
             *
             * @param {string|null} characters [Optional] Return only series which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only series which contain the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} contains [Optional] Return only series containing one or more comics with the
             * specified format. (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {string|null} creators [Optional] Return only series which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only series which have comics that take place during
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only series which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "title",
             * "modified", "startYear", "-title", "-modified", "-startYear")
             * @param {string|null} seriesType [Optional] Filter the series by publication frequency type.
             * (Acceptable values are: "collection", "one shot", "limited",
             * "ongoing")
             * @param {string|null} startYear [Optional] Return only series matching the specified start year.
             * @param {string|null} stories [Optional] Return only series which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only series matching the specified title.
             * @param {string|null} titleStartsWith [Optional] Return series with titles that begin with the
             * specified string (e.g. Sp).
             *
             * @return {promise<SeriesDataWrapper>}
             */
            getSeriesCollection: function (characters,
                comics,
                contains,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                seriesType,
                startYear,
                stories,
                title,
                titleStartsWith)
            {
                // Assign default values
                contains = contains || 'comic';
                orderBy = orderBy || 'title';
                seriesType = seriesType || 'collection';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'contains': (contains !== null) ? contains : 'comic',
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'title',
                    'seriesType': (seriesType !== null) ? seriesType : 'collection',
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesDataWrapperModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else if (_result.code === 409) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Limit greater than 100.',
                            errorCode: 409,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            },
            /**
             * getStorySeriesCollection
             *
             * @param {string} storyId The story ID.
             * @param {string|null} characters [Optional] Return only series which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only series which contain the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} contains [Optional] Return only series containing one or more comics with the
             * specified format. (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {string|null} creators [Optional] Return only series which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only series which have comics that take place during
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only series which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "title",
             * "modified", "startYear", "-title", "-modified", "-startYear")
             * @param {string|null} seriesType [Optional] Filter the series by publication frequency type.
             * (Acceptable values are: "collection", "one shot", "limited",
             * "ongoing")
             * @param {string|null} startYear [Optional] Return only series matching the specified start year.
             * @param {string|null} title [Optional] Filter by series title.
             * @param {string|null} titleStartsWith [Optional] Return series with titles that begin with the
             * specified string (e.g. Sp).
             *
             * @return {promise<SeriesDataWrapper>}
             */
            getStorySeriesCollection: function (storyId,
                characters,
                comics,
                contains,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                seriesType,
                startYear,
                title,
                titleStartsWith)
            {
                // Assign default values
                contains = contains || 'comic';
                orderBy = orderBy || 'title';
                seriesType = seriesType || 'collection';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}/series';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'contains': (contains !== null) ? contains : 'comic',
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'title',
                    'seriesType': (seriesType !== null) ? seriesType : 'collection',
                    'startYear': startYear,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    "apikey": Configuration.apikey
                });

                //validate and preprocess url
                var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
                
                // prepare headers
                var _headers = {
                    'accept': 'application/json'
                };

                // prepare and invoke the API call request to fetch the response
                var _config = {
                    method: 'GET',
                    queryUrl: _queryUrl,
                    headers: _headers,
                };
                
                var _response = new HttpClient(_config);
                
                //process response
                _response.then(function success(_result) {
                    var parsed = _result.body;
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'SeriesDataWrapperModel');
                    _result.body = parsed;
                    _deffered.resolve(_result);
                }, function error(_result){
                    // Error handling for custom HTTP status codes
                    if (_result.code === 404) {
                        _deffered.resolve(null);
                    } else if (_result.code === 409) {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'Limit greater than 100.',
                            errorCode: 409,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    } else {
                        _deffered.reject(APIHelper.appendContext({
                            errorMessage:'HTTP Response Not OK',
                            errorCode: _result.code,
                            errorResponse: _result.message
                        }, _result.getContext()));
                    }
                });
                
                return _deffered.promise;
            }
        };
    }

}(angular));
