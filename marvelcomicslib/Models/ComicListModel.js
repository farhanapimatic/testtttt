/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComicListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ComicListModel', ['BaseModel', ComicListModelModel]);

    function ComicListModelModel(BaseModel) {
        var ComicListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        ComicListModel.prototype = new BaseModel();
        ComicListModel.prototype.constructor = ComicListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComicListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'ComicSummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available issues in this list. Will always be greater than or equal to the "returned"
         * value.
         *
         * @return {int}
         */
        ComicListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        ComicListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of issues in this collection.
         *
         * @return {string}
         */
        ComicListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        ComicListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned issues in this collection.
         *
         * @return {array}
         */
        ComicListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        ComicListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of issues returned in this collection (up to 20).
         *
         * @return {int}
         */
        ComicListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        ComicListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return ComicListModel;
    }

}(angular));
