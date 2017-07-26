/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */
 
;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
	.factory('BaseController', ['ObjectMapper', BaseController]);

	function BaseController(ObjectMapper) {
	    /**
	     * Get ObjectMapper instance
	     * @return {ObjectMapper} Shared instance
	     */
	    var getObjectMapper = function() {
	        return ObjectMapper;
	    };

		return {
			getObjectMapper: getObjectMapper
		};
	}

}(angular));
