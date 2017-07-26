/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CharacterDataWrapperModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CharacterDataWrapperModel', ['BaseModel', CharacterDataWrapperModelModel]);

    function CharacterDataWrapperModelModel(BaseModel) {
        var CharacterDataWrapperModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.attributionHTML = this.getValue(obj.attributionHTML);
            this.attributionText = this.getValue(obj.attributionText);
            this.code = this.getValue(obj.code);
            this.copyright = this.getValue(obj.copyright);
            this.data = this.getValue(obj.data);
            this.etag = this.getValue(obj.etag);
            this.status = this.getValue(obj.status);
        };

        CharacterDataWrapperModel.prototype = new BaseModel();
        CharacterDataWrapperModel.prototype.constructor = CharacterDataWrapperModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CharacterDataWrapperModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'attributionHTML', realName: 'attributionHTML' },
                { name: 'attributionText', realName: 'attributionText' },
                { name: 'code', realName: 'code' },
                { name: 'copyright', realName: 'copyright' },
                { name: 'data', realName: 'data', type: 'CharacterDataContainerModel' },
                { name: 'etag', realName: 'etag' },
                { name: 'status', realName: 'status' }
            ]);
        };
    
        /**
         * An HTML representation of the attribution notice for this result.  Please display either this notice or
         * the contents of the attributionText field on all screens which contain data from the Marvel Comics API.
         *
         * @return {string}
         */
        CharacterDataWrapperModel.prototype.getAttributionHTML = function () {
            return this.attributionHTML;
        };
    
        /**
         * Setter for AttributionHTML
         * 
         * @param {string} value 
         */
        CharacterDataWrapperModel.prototype.setAttributionHTML = function (value) {
            this.attributionHTML = value;
        };
    
        /**
         * The attribution notice for this result.  Please display either this notice or the contents of the
         * attributionHTML field on all screens which contain data from the Marvel Comics API.
         *
         * @return {string}
         */
        CharacterDataWrapperModel.prototype.getAttributionText = function () {
            return this.attributionText;
        };
    
        /**
         * Setter for AttributionText
         * 
         * @param {string} value 
         */
        CharacterDataWrapperModel.prototype.setAttributionText = function (value) {
            this.attributionText = value;
        };
    
        /**
         * The HTTP status code of the returned result.
         *
         * @return {int}
         */
        CharacterDataWrapperModel.prototype.getCode = function () {
            return this.code;
        };
    
        /**
         * Setter for Code
         * 
         * @param {int} value 
         */
        CharacterDataWrapperModel.prototype.setCode = function (value) {
            this.code = value;
        };
    
        /**
         * The copyright notice for the returned result.
         *
         * @return {string}
         */
        CharacterDataWrapperModel.prototype.getCopyright = function () {
            return this.copyright;
        };
    
        /**
         * Setter for Copyright
         * 
         * @param {string} value 
         */
        CharacterDataWrapperModel.prototype.setCopyright = function (value) {
            this.copyright = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CharacterDataContainerModel}
         */
        CharacterDataWrapperModel.prototype.getData = function () {
            return this.data;
        };
    
        /**
         * Setter for Data
         * 
         * @param {CharacterDataContainerModel} value 
         */
        CharacterDataWrapperModel.prototype.setData = function (value) {
            this.data = value;
        };
    
        /**
         * A digest value of the content returned by the call.
         *
         * @return {string}
         */
        CharacterDataWrapperModel.prototype.getEtag = function () {
            return this.etag;
        };
    
        /**
         * Setter for Etag
         * 
         * @param {string} value 
         */
        CharacterDataWrapperModel.prototype.setEtag = function (value) {
            this.etag = value;
        };
    
        /**
         * A string description of the call status.
         *
         * @return {string}
         */
        CharacterDataWrapperModel.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {string} value 
         */
        CharacterDataWrapperModel.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        return CharacterDataWrapperModel;
    }

}(angular));
