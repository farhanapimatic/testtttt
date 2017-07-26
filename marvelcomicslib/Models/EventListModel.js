/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EventListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('EventListModel', ['BaseModel', EventListModelModel]);

    function EventListModelModel(BaseModel) {
        var EventListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        EventListModel.prototype = new BaseModel();
        EventListModel.prototype.constructor = EventListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EventListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'EventSummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available events in this list. Will always be greater than or equal to the "returned"
         * value.
         *
         * @return {int}
         */
        EventListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        EventListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of events in this collection.
         *
         * @return {string}
         */
        EventListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        EventListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned events in this collection.
         *
         * @return {array}
         */
        EventListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        EventListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of events returned in this collection (up to 20).
         *
         * @return {int}
         */
        EventListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        EventListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return EventListModel;
    }

}(angular));
