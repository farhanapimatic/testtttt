/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of StorySummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('StorySummaryModel', ['BaseModel', StorySummaryModelModel]);

    function StorySummaryModelModel(BaseModel) {
        var StorySummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.type = this.getValue(obj.type);
        };

        StorySummaryModel.prototype = new BaseModel();
        StorySummaryModel.prototype.constructor = StorySummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        StorySummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'type', realName: 'type' }
            ]);
        };
    
        /**
         * The canonical name of the story.
         *
         * @return {string}
         */
        StorySummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        StorySummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual story resource.
         *
         * @return {string}
         */
        StorySummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        StorySummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * The type of the story (interior or cover).
         *
         * @return {string}
         */
        StorySummaryModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        StorySummaryModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        return StorySummaryModel;
    }

}(angular));
