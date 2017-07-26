/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
    .factory('Configuration', [Configuration]);

    function Configuration() {
        return {
            //The base Uri for API calls
            BASEURI : 'http://gateway.marvel.com',

            //Developer's API key
            apikey : ''

        };
    }

}(angular));
