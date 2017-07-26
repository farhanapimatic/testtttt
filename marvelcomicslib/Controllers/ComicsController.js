/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('ComicsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', 'BaseController', ComicsController
    ]);

    function ComicsController($q, Configuration, HttpClient, APIHelper, BaseController) {
        return {
            /**
             * getComicIndividual
             *
             * @param {string} comicId A single comic.
             *
             * @return {promise<Comic>}
             */
            getComicIndividual: function (comicId) {

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/comics/{comicId}';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'comicId': comicId
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicModel');
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
             * getComicsCharacterCollection
             *
             * @param {string} characterId The character id.
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work).
             * @param {string|null} creators [Optional] Return only comics which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variant comics from the result set. (Acceptable
             * values are: "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} series [Optional] Return only comics which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear).
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} stories [Optional] Return only comics which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCharacterCollection: function (characterId,
                collaborators,
                creators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                series,
                sharedAppearances,
                startYear,
                stories,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/characters/{characterId}/comics';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'characterId': characterId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'collaborators': collaborators,
                    'creators': creators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'series': series,
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
             * getComicsCollection
             *
             * @param {string|null} characters [Optional] Return only comics which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work). Accepts a comma-separated list of ids.
             * @param {string|null} creators [Optional] Return only comics which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variants (alternate covers, secondary printings,
             * director's cuts, etc.) from the result set. (Acceptable values are:
             * "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} series [Optional] Return only comics which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear). Accepts a comma-separated list of
             * ids.
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} stories [Optional] Return only comics which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCollection: function (characters,
                collaborators,
                creators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                series,
                sharedAppearances,
                startYear,
                stories,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/comics';
                
                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'collaborators': collaborators,
                    'creators': creators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'series': series,
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
             * getComicsCollectionByCreatorId
             *
             * @param {string} creatorId The creator ID.
             * @param {string|null} characters [Optional] Return only comics which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variant comics from the result set. (Acceptable
             * values are: "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} series [Optional] Return only comics which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear).
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} stories [Optional] Return only comics which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCollectionByCreatorId: function (creatorId,
                characters,
                collaborators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                series,
                sharedAppearances,
                startYear,
                stories,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/creators/{creatorId}/comics';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'creatorId': creatorId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'collaborators': collaborators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'series': series,
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
             * getComicsCollectionByEventId
             *
             * @param {string} eventId The event id.
             * @param {string|null} characters [Optional] Return only comics which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work).
             * @param {string|null} creators [Optional] Return only comics which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variant comics from the result set. (Acceptable
             * values are: "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} series [Optional] Return only comics which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear).
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} stories [Optional] Return only comics which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCollectionByEventId: function (eventId,
                characters,
                collaborators,
                creators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                series,
                sharedAppearances,
                startYear,
                stories,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/events/{eventId}/comics';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'eventId': eventId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'collaborators': collaborators,
                    'creators': creators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'series': series,
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
             * getComicsCollectionBySeriesId
             *
             * @param {string} seriesId The series ID.
             * @param {string|null} characters [Optional] Return only comics which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work).
             * @param {string|null} creators [Optional] Return only comics which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variant comics from the result set. (Acceptable
             * values are: "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear).
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} stories [Optional] Return only comics which contain the specified stories
             * (accepts a comma-separated list of ids).
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCollectionBySeriesId: function (seriesId,
                characters,
                collaborators,
                creators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                sharedAppearances,
                startYear,
                stories,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/series/{seriesId}/comics';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'seriesId': seriesId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'collaborators': collaborators,
                    'creators': creators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'stories': stories,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
             * getComicsCollectionByStoryId
             *
             * @param {string} storyId The story ID.
             * @param {string|null} characters [Optional] Return only comics which feature the specified characters
             * (accepts a comma-separated list of ids).
             * @param {string|null} collaborators [Optional] Return only comics in which the specified creators
             * worked together (for example in which BOTH Stan Lee and Jack
             * Kirby did work).
             * @param {string|null} creators [Optional] Return only comics which feature work by the specified
             * creators (accepts a comma-separated list of ids).
             * @param {DateDescriptorEnum|null} dateDescriptor [Optional] Return comics within a predefined date
             * range.
             * @param {string|null} dateRange [Optional] Return comics within a predefined date range.  Dates must
             * be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are
             * preferably formatted as YYYY-MM-DD but may be sent as any common date
             * format.
             * @param {string|null} diamondCode [Optional] Filter by diamond code.
             * @param {string|null} digitalId [Optional] Filter by digital comic id.
             * @param {string|null} ean [Optional] Filter by EAN.
             * @param {string|null} events [Optional] Return only comics which take place in the specified events
             * (accepts a comma-separated list of ids).
             * @param {string|null} format [Optional] Filter by the issue format (e.g. comic, digital comic,
             * hardcover). (Acceptable values are: "comic", "magazine", "trade
             * paperback", "hardcover", "digest", "graphic novel", "digital comic",
             * "infinite comic")
             * @param {FormatTypeEnum|null} formatType [Optional] Filter by the issue format type (comic or
             * collection).
             * @param {string|null} hasDigitalIssue [Optional] Include only results which are available digitally.
             * (Acceptable values are: "true")
             * @param {string|null} isbn [Optional] Filter by ISBN.
             * @param {string|null} issn [Optional] Filter by ISSN.
             * @param {string|null} issueNumber [Optional] Return only issues in series whose issue number matches
             * the input.
             * @param {string|null} limit [Optional] Limit the result set to the specified number of resources.
             * @param {string|null} modifiedSince [Optional] Return only comics which have been modified since the
             * specified date.
             * @param {string|null} noVariants [Optional] Exclude variant comics from the result set. (Acceptable
             * values are: "true")
             * @param {string|null} offset [Optional] Skip the specified number of resources in the result set.
             * @param {string|null} orderBy [Optional] Order the result set by a field or fields. Add a "-" to the
             * value sort in descending order. Multiple values are given priority in
             * the order in which they are passed. (Acceptable values are: "focDate",
             * "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-
             * onsaleDate", "-title", "-issueNumber", "-modified")
             * @param {string|null} series [Optional] Return only comics which are part of the specified series
             * (accepts a comma-separated list of ids).
             * @param {string|null} sharedAppearances [Optional] Return only comics in which the specified
             * characters appear together (for example in which BOTH Spider-
             * Man and Wolverine appear).
             * @param {string|null} startYear [Optional] Return only issues in series whose start year matches the
             * input.
             * @param {string|null} title [Optional] Return only issues in series whose title matches the input.
             * @param {string|null} titleStartsWith [Optional] Return only issues in series whose title starts with
             * the input.
             * @param {string|null} upc [Optional] Filter by UPC.
             *
             * @return {promise<ComicDataWrapper>}
             */
            getComicsCollectionByStoryId: function (storyId,
                characters,
                collaborators,
                creators,
                dateDescriptor,
                dateRange,
                diamondCode,
                digitalId,
                ean,
                events,
                format,
                formatType,
                hasDigitalIssue,
                isbn,
                issn,
                issueNumber,
                limit,
                modifiedSince,
                noVariants,
                offset,
                orderBy,
                series,
                sharedAppearances,
                startYear,
                title,
                titleStartsWith,
                upc)
            {
                // Assign default values
                format = format || 'comic';
                hasDigitalIssue = hasDigitalIssue || 'true';
                noVariants = noVariants || 'true';
                orderBy = orderBy || 'focDate';

                //Create promise to return
                var _deffered = $q.defer();
                
                //prepare query string for API call
                var _baseUri = Configuration.BASEURI;
                var _queryBuilder = _baseUri + '/v1/public/stories/{storyId}/comics';
                
                // Process template parameters
                _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                    'storyId': storyId
                });

                // Process query parameters
                _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                    'characters': characters,
                    'collaborators': collaborators,
                    'creators': creators,
                    'dateDescriptor': (dateDescriptor !== null) ? dateDescriptor : null,
                    'dateRange': dateRange,
                    'diamondCode': diamondCode,
                    'digitalId': digitalId,
                    'ean': ean,
                    'events': events,
                    'format': (format !== null) ? format : 'comic',
                    'formatType': (formatType !== null) ? formatType : null,
                    'hasDigitalIssue': (hasDigitalIssue !== null) ? hasDigitalIssue : 'true',
                    'isbn': isbn,
                    'issn': issn,
                    'issueNumber': issueNumber,
                    'limit': limit,
                    'modifiedSince': modifiedSince,
                    'noVariants': (noVariants !== null) ? noVariants : 'true',
                    'offset': offset,
                    'orderBy': (orderBy !== null) ? orderBy : 'focDate',
                    'series': series,
                    'sharedAppearances': sharedAppearances,
                    'startYear': startYear,
                    'title': title,
                    'titleStartsWith': titleStartsWith,
                    'upc': upc,
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
                    parsed = BaseController.getObjectMapper().mapObject(parsed, 'ComicDataWrapperModel');
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
