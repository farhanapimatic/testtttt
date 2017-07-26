/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('StoriesController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        StoriesController
    ]);

    function StoriesController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getStoryCollection
             *
             * @param {string|null} characters [Optional] Return only stories which feature the specified
             * characters (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only stories contained in the specified (accepts a
             * comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only stories which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only stories which take place during the specified
             * events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             * @param {string|null} series [Optional] Return only stories contained the specified series (accepts a
             * comma-separated list of ids).
             *
             * @return {promise<StoryDataWrapper>}
             */
            getStoryCollection: function (characters,
                comics,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getSeriesStoryCollection
             *
             * @param {string} seriesId The series ID.
             * @param {string|null} characters [Optional] Return only stories which feature the specified
             * characters (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only stories contained in the specified (accepts a
             * comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only stories which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only stories which take place during the specified
             * events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             *
             * @return {promise<StoryDataWrapper>}
             */
            getSeriesStoryCollection: function (seriesId,
                characters,
                comics,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}/stories';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getEventStoryCollection
             *
             * @param {string} eventId The ID of the event.
             * @param {string|null} characters [Optional] Return only stories which feature the specified
             * characters (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only stories contained in the specified (accepts a
             * comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only stories which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             * @param {string|null} series [Optional] Return only stories contained the specified series (accepts a
             * comma-separated list of ids).
             *
             * @return {promise<StoryDataWrapper>}
             */
            getEventStoryCollection: function (eventId,
                characters,
                comics,
                creators,
                limit,
                modifiedSince,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}/stories';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'creators': creators,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getCreatorStoryCollection
             *
             * @param {string} creatorId The ID of the creator.
             * @param {string|null} characters [Optional] Return only stories which feature the specified
             * characters (accepts a comma-separated list of ids).
             * @param {string|null} comics [Optional] Return only stories contained in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only stories which take place during the specified
             * events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             * @param {string|null} series [Optional] Return only stories contained the specified series (accepts a
             * comma-separated list of ids).
             *
             * @return {promise<StoryDataWrapper>}
             */
            getCreatorStoryCollection: function (creatorId,
                characters,
                comics,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators/{creatorId}/stories';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'creatorId': creatorId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'comics': comics,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getComicStoryCollectionByComicId
             *
             * @param {string} comicId The comic ID.
             * @param {string|null} characters [Optional] Return only stories which feature the specified
             * characters (accepts a comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only stories which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only stories which take place during the specified
             * events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             * @param {string|null} series [Optional] Return only stories contained the specified series (accepts a
             * comma-separated list of ids).
             *
             * @return {promise<StoryDataWrapper>}
             */
            getComicStoryCollectionByComicId: function (comicId,
                characters,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/comics/{comicId}/stories';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'comicId': comicId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getCharacterStoryCollection
             *
             * @param {string} characterId The character ID.
             * @param {string|null} comics [Optional] Return only stories contained in the specified (accepts a
             * comma-separated list of ids).
             * @param {string|null} creators [Optional] Return only stories which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only stories which take place during the specified
             * events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only stories which have been modified since the
             * specified date.
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "id",
             * "modified", "-id", "-modified")
             * @param {string|null} series [Optional] Return only stories contained the specified series (accepts a
             * comma-separated list of ids).
             *
             * @return {promise<StoryDataWrapper>}
             */
            getCharacterStoryCollection: function (characterId,
                comics,
                creators,
                events,
                limit,
                modifiedSince,
                offset,
                orderBy,
                series)
            {
                // Assign default values
                orderBy = orderBy || 'id';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/characters/{characterId}/stories';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'characterId': characterId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'creators': creators,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'id',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryDataWrapperModel');
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
             * getStoryIndividual
             *
             * @param {string} storyId Filter by story id.
             *
             * @return {promise<Story>}
             */
            getStoryIndividual: function (storyId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'StoryModel');
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
            }
        };
    }

}(angular));
