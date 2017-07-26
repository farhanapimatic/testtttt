/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SeriesListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('SeriesListModel', ['BaseModel', SeriesListModelModel]);

    function SeriesListModelModel(BaseModel) {
        var SeriesListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        SeriesListModel.prototype = new BaseModel();
        SeriesListModel.prototype.constructor = SeriesListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SeriesListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'SeriesSummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available series in this list. Will always be greater than or equal to the "returned"
         * value.
         *
         * @return {int}
         */
        SeriesListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        SeriesListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of series in this collection.
         *
         * @return {string}
         */
        SeriesListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        SeriesListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned series in this collection.
         *
         * @return {array}
         */
        SeriesListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        SeriesListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of series returned in this collection (up to 20).
         *
         * @return {int}
         */
        SeriesListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        SeriesListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return SeriesListModel;
    }

}(angular));
