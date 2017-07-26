/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComicSummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ComicSummaryModel', ['BaseModel', ComicSummaryModelModel]);

    function ComicSummaryModelModel(BaseModel) {
        var ComicSummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
        };

        ComicSummaryModel.prototype = new BaseModel();
        ComicSummaryModel.prototype.constructor = ComicSummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComicSummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' }
            ]);
        };
    
        /**
         * The canonical name of the comic.
         *
         * @return {string}
         */
        ComicSummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        ComicSummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual comic resource.
         *
         * @return {string}
         */
        ComicSummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        ComicSummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        return ComicSummaryModel;
    }

}(angular));
