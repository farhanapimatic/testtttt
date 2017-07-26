/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CreatorDataContainerModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CreatorDataContainerModel', ['BaseModel', CreatorDataContainerModelModel]);

    function CreatorDataContainerModelModel(BaseModel) {
        var CreatorDataContainerModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.count = this.getValue(obj.count);
            this.limit = this.getValue(obj.limit);
            this.offset = this.getValue(obj.offset);
            this.results = this.getValue(obj.results);
            this.total = this.getValue(obj.total);
        };

        CreatorDataContainerModel.prototype = new BaseModel();
        CreatorDataContainerModel.prototype.constructor = CreatorDataContainerModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CreatorDataContainerModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'count', realName: 'count' },
                { name: 'limit', realName: 'limit' },
                { name: 'offset', realName: 'offset' },
                { name: 'results', realName: 'results', array: true, type: 'CreatorModel' },
                { name: 'total', realName: 'total' }
            ]);
        };
    
        /**
         * The total number of results returned by this call.
         *
         * @return {int}
         */
        CreatorDataContainerModel.prototype.getCount = function () {
            return this.count;
        };
    
        /**
         * Setter for Count
         * 
         * @param {int} value 
         */
        CreatorDataContainerModel.prototype.setCount = function (value) {
            this.count = value;
        };
    
        /**
         * The requested result limit.
         *
         * @return {int}
         */
        CreatorDataContainerModel.prototype.getLimit = function () {
            return this.limit;
        };
    
        /**
         * Setter for Limit
         * 
         * @param {int} value 
         */
        CreatorDataContainerModel.prototype.setLimit = function (value) {
            this.limit = value;
        };
    
        /**
         * The requested offset (number of skipped results) of the call.
         *
         * @return {int}
         */
        CreatorDataContainerModel.prototype.getOffset = function () {
            return this.offset;
        };
    
        /**
         * Setter for Offset
         * 
         * @param {int} value 
         */
        CreatorDataContainerModel.prototype.setOffset = function (value) {
            this.offset = value;
        };
    
        /**
         * The list of creators returned by the call.
         *
         * @return {array}
         */
        CreatorDataContainerModel.prototype.getResults = function () {
            return this.results;
        };
    
        /**
         * Setter for Results
         * 
         * @param {array} value 
         */
        CreatorDataContainerModel.prototype.setResults = function (value) {
            this.results = value;
        };
    
        /**
         * The total number of resources available given the current filter set.
         *
         * @return {int}
         */
        CreatorDataContainerModel.prototype.getTotal = function () {
            return this.total;
        };
    
        /**
         * Setter for Total
         * 
         * @param {int} value 
         */
        CreatorDataContainerModel.prototype.setTotal = function (value) {
            this.total = value;
        };
    
        return CreatorDataContainerModel;
    }

}(angular));
