/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SeriesDataContainerModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('SeriesDataContainerModel', ['BaseModel', SeriesDataContainerModelModel]);

    function SeriesDataContainerModelModel(BaseModel) {
        var SeriesDataContainerModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.count = this.getValue(obj.count);
            this.limit = this.getValue(obj.limit);
            this.offset = this.getValue(obj.offset);
            this.results = this.getValue(obj.results);
            this.total = this.getValue(obj.total);
        };

        SeriesDataContainerModel.prototype = new BaseModel();
        SeriesDataContainerModel.prototype.constructor = SeriesDataContainerModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SeriesDataContainerModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'count', realName: 'count' },
                { name: 'limit', realName: 'limit' },
                { name: 'offset', realName: 'offset' },
                { name: 'results', realName: 'results', array: true, type: 'SeriesModel' },
                { name: 'total', realName: 'total' }
            ]);
        };
    
        /**
         * The total number of results returned by this call.
         *
         * @return {int}
         */
        SeriesDataContainerModel.prototype.getCount = function () {
            return this.count;
        };
    
        /**
         * Setter for Count
         * 
         * @param {int} value 
         */
        SeriesDataContainerModel.prototype.setCount = function (value) {
            this.count = value;
        };
    
        /**
         * The requested result limit.
         *
         * @return {int}
         */
        SeriesDataContainerModel.prototype.getLimit = function () {
            return this.limit;
        };
    
        /**
         * Setter for Limit
         * 
         * @param {int} value 
         */
        SeriesDataContainerModel.prototype.setLimit = function (value) {
            this.limit = value;
        };
    
        /**
         * The requested offset (number of skipped results) of the call.
         *
         * @return {int}
         */
        SeriesDataContainerModel.prototype.getOffset = function () {
            return this.offset;
        };
    
        /**
         * Setter for Offset
         * 
         * @param {int} value 
         */
        SeriesDataContainerModel.prototype.setOffset = function (value) {
            this.offset = value;
        };
    
        /**
         * The list of series returned by the call
         *
         * @return {array}
         */
        SeriesDataContainerModel.prototype.getResults = function () {
            return this.results;
        };
    
        /**
         * Setter for Results
         * 
         * @param {array} value 
         */
        SeriesDataContainerModel.prototype.setResults = function (value) {
            this.results = value;
        };
    
        /**
         * The total number of resources available given the current filter set.
         *
         * @return {int}
         */
        SeriesDataContainerModel.prototype.getTotal = function () {
            return this.total;
        };
    
        /**
         * Setter for Total
         * 
         * @param {int} value 
         */
        SeriesDataContainerModel.prototype.setTotal = function (value) {
            this.total = value;
        };
    
        return SeriesDataContainerModel;
    }

}(angular));
