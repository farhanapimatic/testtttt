/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CharacterSummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CharacterSummaryModel', ['BaseModel', CharacterSummaryModelModel]);

    function CharacterSummaryModelModel(BaseModel) {
        var CharacterSummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.role = this.getValue(obj.role);
        };

        CharacterSummaryModel.prototype = new BaseModel();
        CharacterSummaryModel.prototype.constructor = CharacterSummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CharacterSummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'role', realName: 'role' }
            ]);
        };
    
        /**
         * The full name of the character.
         *
         * @return {string}
         */
        CharacterSummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        CharacterSummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual character resource.
         *
         * @return {string}
         */
        CharacterSummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        CharacterSummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * The role of the creator in the parent entity.
         *
         * @return {string}
         */
        CharacterSummaryModel.prototype.getRole = function () {
            return this.role;
        };
    
        /**
         * Setter for Role
         * 
         * @param {string} value 
         */
        CharacterSummaryModel.prototype.setRole = function (value) {
            this.role = value;
        };
    
        return CharacterSummaryModel;
    }

}(angular));
