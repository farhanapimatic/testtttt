/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SeriesSummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('SeriesSummaryModel', ['BaseModel', SeriesSummaryModelModel]);

    function SeriesSummaryModelModel(BaseModel) {
        var SeriesSummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
        };

        SeriesSummaryModel.prototype = new BaseModel();
        SeriesSummaryModel.prototype.constructor = SeriesSummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SeriesSummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' }
            ]);
        };
    
        /**
         * The canonical name of the series.
         *
         * @return {string}
         */
        SeriesSummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        SeriesSummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual series resource.
         *
         * @return {string}
         */
        SeriesSummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        SeriesSummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        return SeriesSummaryModel;
    }

}(angular));
