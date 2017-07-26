/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('CharactersController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        CharactersController
    ]);

    function CharactersController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getCharacterCollectionByStoryId
             *
             * @param {string} storyId The story ID.
             * @param {string|null} comics [Optional] Return only characters which appear in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only characters which appear comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only characters which have been modified since
             * the specified date.
             * @param {string|null} name [Optional] Return only characters matching the specified full character
             * name (e.g. Spider-Man).
             * @param {string|null} nameStartsWith [Optional] Return characters with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "modified", "-name", "-modified")
             * @param {string|null} series [Optional] Return only characters which appear the specified series
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<CharacterDataWrapper>}
             */
            getCharacterCollectionByStoryId: function (storyId,
                comics,
                events,
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
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}/characters';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterDataWrapperModel');
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
             * getSeriesCharacterWrapper
             *
             * @param {string} seriesId The series id.
             * @param {string|null} comics [Optional] Return only characters which appear in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only characters which appear comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only characters which have been modified since
             * the specified date.
             * @param {string|null} name [Optional] Return only characters matching the specified full character
             * name (e.g. Spider-Man).
             * @param {string|null} nameStartsWith [Optional] Return characters with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "modified", "-name", "-modified")
             * @param {string|null} stories [Optional] Return only characters which appear the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<CharacterDataWrapper>}
             */
            getSeriesCharacterWrapper: function (seriesId,
                comics,
                events,
                limit,
                modifiedSince,
                name,
                nameStartsWith,
                offset,
                orderBy,
                stories)
            {
                // Assign default values
                orderBy = orderBy || 'name';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}/characters';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'name': name,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'name',
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterDataWrapperModel');
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
             * getEventCharacterCollection
             *
             * @param {string} eventId The event ID
             * @param {string|null} comics [Optional] Return only characters which appear in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only characters which have been modified since
             * the specified date.
             * @param {string|null} name [Optional] Return only characters matching the specified full character
             * name (e.g. Spider-Man).
             * @param {string|null} nameStartsWith [Optional] Return characters with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "modified", "-name", "-modified")
             * @param {string|null} series [Optional] Return only characters which appear the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only characters which appear the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<CharacterDataWrapper>}
             */
            getEventCharacterCollection: function (eventId,
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
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}/characters';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterDataWrapperModel');
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
             * getComicCharacterCollection
             *
             * @param {string} comicId The comic id.
             * @param {string|null} events [Optional] Return only characters which appear comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only characters which have been modified since
             * the specified date.
             * @param {string|null} name [Optional] Return only characters matching the specified full character
             * name (e.g. Spider-Man).
             * @param {string|null} nameStartsWith [Optional] Return characters with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "modified", "-name", "-modified")
             * @param {string|null} series [Optional] Return only characters which appear the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only characters which appear the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<CharacterDataWrapper>}
             */
            getComicCharacterCollection: function (comicId,
                events,
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
                var _queryBuilder = _baseUri + '/v1/public/comics/{comicId}/characters';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'comicId': comicId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'events': events,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterDataWrapperModel');
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
             * getCharacterIndividual
             *
             * @param {string} characterId A single character id.
             *
             * @return {promise<Character>}
             */
            getCharacterIndividual: function (characterId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/characters/{characterId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'characterId': characterId
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterModel');
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
             * getCharacterCollection
             *
             * @param {string|null} comics [Optional] Return only characters which appear in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only characters which appear in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only characters which have been modified since
             * the specified date.
             * @param {string|null} name [Optional] Return only characters matching the specified full character
             * name (e.g. Spider-Man).
             * @param {string|null} nameStartsWith [Optional] Return characters with names that begin with the
             * specified string (e.g. Sp).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "name",
             * "modified", "-name", "-modified")
             * @param {string|null} series [Optional] Return only characters which appear the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only characters which appear the specified stories
             * (accepts a comma-separated list of ids).
             *
             * @return {promise<CharacterDataWrapper>}
             */
            getCharacterCollection: function (comics,
                events,
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
                var _queryBuilder = _baseUri + '/v1/public/characters';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CharacterDataWrapperModel');
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
