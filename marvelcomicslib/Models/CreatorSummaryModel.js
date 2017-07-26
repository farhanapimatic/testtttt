/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CreatorSummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CreatorSummaryModel', ['BaseModel', CreatorSummaryModelModel]);

    function CreatorSummaryModelModel(BaseModel) {
        var CreatorSummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.role = this.getValue(obj.role);
        };

        CreatorSummaryModel.prototype = new BaseModel();
        CreatorSummaryModel.prototype.constructor = CreatorSummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CreatorSummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'role', realName: 'role' }
            ]);
        };
    
        /**
         * The full name of the creator.
         *
         * @return {string}
         */
        CreatorSummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        CreatorSummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual creator resource.
         *
         * @return {string}
         */
        CreatorSummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        CreatorSummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * The role of the creator in the parent entity.
         *
         * @return {string}
         */
        CreatorSummaryModel.prototype.getRole = function () {
            return this.role;
        };
    
        /**
         * Setter for Role
         * 
         * @param {string} value 
         */
        CreatorSummaryModel.prototype.setRole = function (value) {
            this.role = value;
        };
    
        return CreatorSummaryModel;
    }

}(angular));
