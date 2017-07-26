/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('CreatorsController', ['$q',
        'Configuration',
        'HttpClient',
        'APIHelper',
        'BaseController',
        CreatorsController
    ]);

    function CreatorsController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getCreatorIndividual
             *
             * @param {string} creatorId A single creator id.
             *
             * @return {promise<Creator>}
             */
            getCreatorIndividual: function (creatorId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators/{creatorId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'creatorId': creatorId
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorModel');
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
             * getCreatorCollectionByComicId
             *
             * @param {string} comicId The comic id.
             * @param {string|null} comics [Optional] Return only creators who worked on in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} firstName [Optional] Filter by creator first name (e.g. brian).
             * @param {string|null} firstNameStartsWith [Optional] Filter by creator first names that match critera
             * (e.g. B, St L).
             * @param {string|null} lastName [Optional] Filter by creator last name (e.g. Bendis).
             * @param {string|null} lastNameStartsWith [Optional] Filter by creator last names that match critera
             * (e.g. Ben).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} middleName [Optional] Filter by creator middle name (e.g. Michael).
             * @param {string|null} middleNameStartsWith [Optional] Filter by creator middle names that match
             * critera (e.g. Mi).
             * @param {string|null} modifiedSince [Optional] Return only creators which have been modified since
             * the specified date.
             * @param {string|null} nameStartsWith [Optional] Filter by creator names that match critera (e.g. B,
             * St L).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "lastName",
             * "firstName", "middleName", "suffix", "modified", "-lastName", "-
             * firstName", "-middleName", "-suffix", "-modified")
             * @param {string|null} series [Optional] Return only creators who worked on the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only creators who worked on the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} suffix [Optional] Filter by suffix or honorific (e.g. Jr., Sr.).
             *
             * @return {promise<CreatorDataWrapper>}
             */
            getCreatorCollectionByComicId: function (comicId,
                comics,
                firstName,
                firstNameStartsWith,
                lastName,
                lastNameStartsWith,
                limit,
                middleName,
                middleNameStartsWith,
                modifiedSince,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories,
                suffix)
            {
                // Assign default values
                orderBy = orderBy || 'lastName';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/comics/{comicId}/creators';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'comicId': comicId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'firstName': firstName,
                    'firstNameStartsWith': firstNameStartsWith,
                    'lastName': lastName,
                    'lastNameStartsWith': lastNameStartsWith,
                    'limit': limit,
                    'middleName': middleName,
                    'middleNameStartsWith': middleNameStartsWith,
                    'modifiedSince': modifiedSince,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'lastName',
                    'series': series,
                    'stories': stories,
                    'suffix': suffix,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorDataWrapperModel');
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
             * getCreatorCollection
             *
             * @param {string|null} comics [Optional] Return only creators who worked on in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only creators who worked on comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} firstName [Optional] Filter by creator first name (e.g. Brian).
             * @param {string|null} firstNameStartsWith [Optional] Filter by creator first names that match critera
             * (e.g. B, St L).
             * @param {string|null} lastName [Optional] Filter by creator last name (e.g. Bendis).
             * @param {string|null} lastNameStartsWith [Optional] Filter by creator last names that match critera
             * (e.g. Ben).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} middleName [Optional] Filter by creator middle name (e.g. Michael).
             * @param {string|null} middleNameStartsWith [Optional] Filter by creator middle names that match
             * critera (e.g. Mi).
             * @param {string|null} modifiedSince [Optional] Return only creators which have been modified since
             * the specified date.
             * @param {string|null} nameStartsWith [Optional] Filter by creator names that match critera (e.g. B,
             * St L).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "lastName",
             * "firstName", "middleName", "suffix", "modified", "-lastName", "-
             * firstName", "-middleName", "-suffix", "-modified")
             * @param {string|null} series [Optional] Return only creators who worked on the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only creators who worked on the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} suffix [Optional] Filter by suffix or honorific (e.g. Jr., Sr.).
             *
             * @return {promise<CreatorDataWrapper>}
             */
            getCreatorCollection: function (comics,
                events,
                firstName,
                firstNameStartsWith,
                lastName,
                lastNameStartsWith,
                limit,
                middleName,
                middleNameStartsWith,
                modifiedSince,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories,
                suffix)
            {
                // Assign default values
                orderBy = orderBy || 'lastName';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
                    'firstName': firstName,
                    'firstNameStartsWith': firstNameStartsWith,
                    'lastName': lastName,
                    'lastNameStartsWith': lastNameStartsWith,
                    'limit': limit,
                    'middleName': middleName,
                    'middleNameStartsWith': middleNameStartsWith,
                    'modifiedSince': modifiedSince,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'lastName',
                    'series': series,
                    'stories': stories,
                    'suffix': suffix,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorDataWrapperModel');
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
             * getCreatorCollectionByEventId
             *
             * @param {string} eventId The event ID.
             * @param {string|null} comics [Optional] Return only creators who worked on in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} firstName [Optional] Filter by creator first name (e.g. brian).
             * @param {string|null} firstNameStartsWith [Optional] Filter by creator first names that match critera
             * (e.g. B, St L).
             * @param {string|null} lastName [Optional] Filter by creator last name (e.g. Bendis).
             * @param {string|null} lastNameStartsWith [Optional] Filter by creator last names that match critera
             * (e.g. Ben).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} middleName [Optional] Filter by creator middle name (e.g. Michael).
             * @param {string|null} middleNameStartsWith [Optional] Filter by creator middle names that match
             * critera (e.g. Mi).
             * @param {string|null} modifiedSince [Optional] Return only creators which have been modified since
             * the specified date.
             * @param {string|null} nameStartsWith [Optional] Filter by creator names that match critera (e.g. B,
             * St L).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "lastName",
             * "firstName", "middleName", "suffix", "modified", "-lastName", "-
             * firstName", "-middleName", "-suffix", "-modified")
             * @param {string|null} series [Optional] Return only creators who worked on the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} stories [Optional] Return only creators who worked on the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} suffix [Optional] Filter by suffix or honorific (e.g. Jr., Sr.).
             *
             * @return {promise<CreatorDataWrapper>}
             */
            getCreatorCollectionByEventId: function (eventId,
                comics,
                firstName,
                firstNameStartsWith,
                lastName,
                lastNameStartsWith,
                limit,
                middleName,
                middleNameStartsWith,
                modifiedSince,
                nameStartsWith,
                offset,
                orderBy,
                series,
                stories,
                suffix)
            {
                // Assign default values
                orderBy = orderBy || 'lastName';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}/creators';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'firstName': firstName,
                    'firstNameStartsWith': firstNameStartsWith,
                    'lastName': lastName,
                    'lastNameStartsWith': lastNameStartsWith,
                    'limit': limit,
                    'middleName': middleName,
                    'middleNameStartsWith': middleNameStartsWith,
                    'modifiedSince': modifiedSince,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'lastName',
                    'series': series,
                    'stories': stories,
                    'suffix': suffix,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorDataWrapperModel');
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
             * getCreatorCollectionBySeriesId
             *
             * @param {string} seriesId The series ID.
             * @param {string|null} comics [Optional] Return only creators who worked on in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only creators who worked on comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} firstName [Optional] Filter by creator first name (e.g. brian).
             * @param {string|null} firstNameStartsWith [Optional] Filter by creator first names that match critera
             * (e.g. B, St L).
             * @param {string|null} lastName [Optional] Filter by creator last name (e.g. Bendis).
             * @param {string|null} lastNameStartsWith [Optional] Filter by creator last names that match critera
             * (e.g. Ben).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} middleName [Optional] Filter by creator middle name (e.g. Michael).
             * @param {string|null} middleNameStartsWith [Optional] Filter by creator middle names that match
             * critera (e.g. Mi).
             * @param {string|null} modifiedSince [Optional] Return only creators which have been modified since
             * the specified date.
             * @param {string|null} nameStartsWith [Optional] Filter by creator names that match critera (e.g. B,
             * St L).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "lastName",
             * "firstName", "middleName", "suffix", "modified", "-lastName", "-
             * firstName", "-middleName", "-suffix", "-modified")
             * @param {string|null} stories [Optional] Return only creators who worked on the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} suffix [Optional] Filter by suffix or honorific (e.g. Jr., Sr.).
             *
             * @return {promise<CreatorDataWrapper>}
             */
            getCreatorCollectionBySeriesId: function (seriesId,
                comics,
                events,
                firstName,
                firstNameStartsWith,
                lastName,
                lastNameStartsWith,
                limit,
                middleName,
                middleNameStartsWith,
                modifiedSince,
                nameStartsWith,
                offset,
                orderBy,
                stories,
                suffix)
            {
                // Assign default values
                orderBy = orderBy || 'lastName';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}/creators';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
                    'firstName': firstName,
                    'firstNameStartsWith': firstNameStartsWith,
                    'lastName': lastName,
                    'lastNameStartsWith': lastNameStartsWith,
                    'limit': limit,
                    'middleName': middleName,
                    'middleNameStartsWith': middleNameStartsWith,
                    'modifiedSince': modifiedSince,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'lastName',
                    'stories': stories,
                    'suffix': suffix,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorDataWrapperModel');
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
             * getCreatorCollectionByStoryId
             *
             * @param {string} storyId The story ID.
             * @param {string|null} comics [Optional] Return only creators who worked on in the specified comics
             * (accepts a comma-separated list of ids).
             * @param {string|null} events [Optional] Return only creators who worked on comics that took place in
             * the specified events (accepts a comma-separated list of ids).
             * @param {string|null} firstName [Optional] Filter by creator first name (e.g. brian).
             * @param {string|null} firstNameStartsWith [Optional] Filter by creator first names that match critera
             * (e.g. B, St L).
             * @param {string|null} lastName [Optional] Filter by creator last name (e.g. Bendis).
             * @param {string|null} lastNameStartsWith [Optional] Filter by creator last names that match critera
             * (e.g. Ben).
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} middleName [Optional] Filter by creator middle name (e.g. Michael).
             * @param {string|null} middleNameStartsWith [Optional] Filter by creator middle names that match
             * critera (e.g. Mi).
             * @param {string|null} modifiedSince [Optional] Return only creators which have been modified since
             * the specified date.
             * @param {string|null} nameStartsWith [Optional] Filter by creator names that match critera (e.g. B,
             * St L).
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "lastName",
             * "firstName", "middleName", "suffix", "modified", "-lastName", "-
             * firstName", "-middleName", "-suffix", "-modified")
             * @param {string|null} series [Optional] Return only creators who worked on the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} suffix [Optional] Filter by suffix or honorific (e.g. Jr., Sr.).
             *
             * @return {promise<CreatorDataWrapper>}
             */
            getCreatorCollectionByStoryId: function (storyId,
                comics,
                events,
                firstName,
                firstNameStartsWith,
                lastName,
                lastNameStartsWith,
                limit,
                middleName,
                middleNameStartsWith,
                modifiedSince,
                nameStartsWith,
                offset,
                orderBy,
                series,
                suffix)
            {
                // Assign default values
                orderBy = orderBy || 'lastName';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}/creators';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'comics': comics,
                    'events': events,
                    'firstName': firstName,
                    'firstNameStartsWith': firstNameStartsWith,
                    'lastName': lastName,
                    'lastNameStartsWith': lastNameStartsWith,
                    'limit': limit,
                    'middleName': middleName,
                    'middleNameStartsWith': middleNameStartsWith,
                    'modifiedSince': modifiedSince,
                    'nameStartsWith': nameStartsWith,
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'lastName',
                    'series': series,
                    'suffix': suffix,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'CreatorDataWrapperModel');
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
