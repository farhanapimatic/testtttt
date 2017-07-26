/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CharacterListModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CharacterListModel', ['BaseModel', CharacterListModelModel]);

    function CharacterListModelModel(BaseModel) {
        var CharacterListModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.available = this.getValue(obj.available);
            this.collectionURI = this.getValue(obj.collectionURI);
            this.items = this.getValue(obj.items);
            this.returned = this.getValue(obj.returned);
        };

        CharacterListModel.prototype = new BaseModel();
        CharacterListModel.prototype.constructor = CharacterListModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CharacterListModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'available', realName: 'available' },
                { name: 'collectionURI', realName: 'collectionURI' },
                { name: 'items', realName: 'items', array: true, type: 'CharacterSummaryModel' },
                { name: 'returned', realName: 'returned' }
            ]);
        };
    
        /**
         * The number of total available characters in this list. Will always be greater than or equal to the
         * "returned" value.
         *
         * @return {int}
         */
        CharacterListModel.prototype.getAvailable = function () {
            return this.available;
        };
    
        /**
         * Setter for Available
         * 
         * @param {int} value 
         */
        CharacterListModel.prototype.setAvailable = function (value) {
            this.available = value;
        };
    
        /**
         * The path to the full list of characters in this collection.
         *
         * @return {string}
         */
        CharacterListModel.prototype.getCollectionURI = function () {
            return this.collectionURI;
        };
    
        /**
         * Setter for CollectionURI
         * 
         * @param {string} value 
         */
        CharacterListModel.prototype.setCollectionURI = function (value) {
            this.collectionURI = value;
        };
    
        /**
         * The list of returned characters in this collection.
         *
         * @return {array}
         */
        CharacterListModel.prototype.getItems = function () {
            return this.items;
        };
    
        /**
         * Setter for Items
         * 
         * @param {array} value 
         */
        CharacterListModel.prototype.setItems = function (value) {
            this.items = value;
        };
    
        /**
         * The number of characters returned in this collection (up to 20).
         *
         * @return {int}
         */
        CharacterListModel.prototype.getReturned = function () {
            return this.returned;
        };
    
        /**
         * Setter for Returned
         * 
         * @param {int} value 
         */
        CharacterListModel.prototype.setReturned = function (value) {
            this.returned = value;
        };
    
        return CharacterListModel;
    }

}(angular));
