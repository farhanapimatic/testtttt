/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CreatorListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CreatorListModel', ['BaseModel', CreatorListModelModel]);

    function CreatorListModelModel(BaseModel) {
        var CreatorListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        CreatorListModel.prototype = new BaseModel();
        CreatorListModel.prototype.constructor = CreatorListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CreatorListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'CreatorSummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available creators in this list. Will always be greater than or equal to the
         * "returned" value.
         *
         * @return {int}
         */
        CreatorListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        CreatorListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of creators in this collection.
         *
         * @return {string}
         */
        CreatorListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        CreatorListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned creators in this collection.
         *
         * @return {array}
         */
        CreatorListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        CreatorListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of creators returned in this collection (up to 20).
         *
         * @return {int}
         */
        CreatorListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        CreatorListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return CreatorListModel;
    }

}(angular));
