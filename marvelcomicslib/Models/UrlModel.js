/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of UrlModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('UrlModel', ['BaseModel', UrlModelModel]);

    function UrlModelModel(BaseModel) {
        var UrlModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.type = this.getValue(obj.type);
            this.url = this.getValue(obj.url);
        };

        UrlModel.prototype = new BaseModel();
        UrlModel.prototype.constructor = UrlModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        UrlModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'type', realName: 'type' },
                { name: 'url', realName: 'url' }
            ]);
        };
    
        /**
         * A text identifier for the URL.
         *
         * @return {string}
         */
        UrlModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        UrlModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        /**
         * A full URL (including scheme, domain, and path).
         *
         * @return {string}
         */
        UrlModel.prototype.getUrl = function () {
            return this.url;
        };
    
        /**
         * Setter for Url
         * 
         * @param {string} value 
         */
        UrlModel.prototype.setUrl = function (value) {
            this.url = value;
        };
    
        return UrlModel;
    }

}(angular));
