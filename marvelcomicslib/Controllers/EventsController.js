/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('EventsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', EventsController
    ]);

    function EventsController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getEventsCollectionByStoryId
             *
             * @param {string} storyId The story ID.
             * @param {string|null} characters [Optional] Return only events which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only events which take place in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only events which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Filter the event list by name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} series [Optional] Return only events which are part of the specified series
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getEventsCollectionByStoryId: function (storyId,
                characters,
                comics,
                creators,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}/events';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
                    'series': series,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
             * getEventsCollectionBySeriesId
             *
             * @param {string} seriesId The series ID.
             * @param {string|null} characters [Optional] Return only events which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only events which take place in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only events which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Filter the event list by name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {array|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} stories [Optional] Return only events which contain the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getEventsCollectionBySeriesId: function (seriesId,
                characters,
                comics,
                creators,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                stories)
            {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}/events';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': orderBy,
                    'stories': stories,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
             * getCreatorEventsCollection
             *
             * @param {string} creatorId The creator ID.
             * @param {string|null} characters [Optional] Return only events which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only events which take place in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Filter the event list by name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} series [Optional] Return only events which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only events which contain the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getCreatorEventsCollection: function (creatorId,
                characters,
                comics,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators/{creatorId}/events';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'creatorId': creatorId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
                    'series': series,
                    'stories': stories,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
             * getIssueEventsCollection
             *
             * @param {string} comicId The comic ID.
             * @param {string|null} characters [Optional] Return only events which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only events which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Filter the event list by name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} series [Optional] Return only events which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only events which contain the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getIssueEventsCollection: function (comicId,
                characters,
                creators,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/comics/{comicId}/events';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'comicId': comicId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
                    'series': series,
                    'stories': stories,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
             * getCharacterEventsCollection
             *
             * @param {string} characterId The character ID.
             * @param {string|null} comics [Optional] Return only events which take place in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only events which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Filter the event list by name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} series [Optional] Return only events which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only events which contain the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getCharacterEventsCollection: function (characterId,
                comics,
                creators,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/characters/{characterId}/events';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'characterId': characterId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
                    'series': series,
                    'stories': stories,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
             * getEventIndividual
             *
             * @param {string} eventId A single event.
             *
             * @return {promise<Event>}
             */
            getEventIndividual: function (eventId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventModel');
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
             * getEventsCollection
             *
             * @param {string|null} characters [Optional] Return only events which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only events which take place in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only events which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only events which have been modified since the
             * specified date.
             * @param {string|null} name [Optional] Return only events which match the specified name.
             * @param {string|null} nameStartsWith [Optional] Return events with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "startDate", "modified", "-name", "-startDate", "-modified")
             * @param {string|null} series [Optional] Return only events which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only events which take place in the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<EventDataWrapper>}
             */
            getEventsCollection: function (characters,
                comics,
                creators,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
                    'series': series,
                    'stories': stories,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'EventDataWrapperModel');
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
