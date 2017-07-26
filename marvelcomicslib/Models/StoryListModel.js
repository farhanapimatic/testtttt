/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of StoryListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('StoryListModel', ['BaseModel', StoryListModelModel]);

    function StoryListModelModel(BaseModel) {
        var StoryListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        StoryListModel.prototype = new BaseModel();
        StoryListModel.prototype.constructor = StoryListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        StoryListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'StorySummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available stories in this list. Will always be greater than or equal to the
         * "returned" value.
         *
         * @return {int}
         */
        StoryListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        StoryListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of stories in this collection.
         *
         * @return {string}
         */
        StoryListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        StoryListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned stories in this collection.
         *
         * @return {array}
         */
        StoryListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        StoryListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of stories returned in this collection (up to 20).
         *
         * @return {int}
         */
        StoryListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        StoryListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return StoryListModel;
    }

}(angular));
