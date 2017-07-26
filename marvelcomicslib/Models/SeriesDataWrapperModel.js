/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SeriesDataWrapperModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('SeriesDataWrapperModel', ['BaseModel', SeriesDataWrapperModelModel]);

    function SeriesDataWrapperModelModel(BaseModel) {
        var SeriesDataWrapperModel = function (obj) {
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

        SeriesDataWrapperModel.prototype = new BaseModel();
        SeriesDataWrapperModel.prototype.constructor = SeriesDataWrapperModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SeriesDataWrapperModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'attributionHTML', realName: 'attributionHTML' },
                { name: 'attributionText', realName: 'attributionText' },
                { name: 'code', realName: 'code' },
                { name: 'copyright', realName: 'copyright' },
                { name: 'data', realName: 'data', type: 'SeriesDataContainerModel' },
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
        SeriesDataWrapperModel.prototype.getAttributionHTML = function () {
            return this.attributionHTML;
        };
    
        /**
         * Setter for AttributionHTML
         * 
         * @param {string} value 
         */
        SeriesDataWrapperModel.prototype.setAttributionHTML = function (value) {
            this.attributionHTML = value;
        };
    
        /**
         * The attribution notice for this result.  Please display either this notice or the contents of the
         * attributionHTML field on all screens which contain data from the Marvel Comics API.
         *
         * @return {string}
         */
        SeriesDataWrapperModel.prototype.getAttributionText = function () {
            return this.attributionText;
        };
    
        /**
         * Setter for AttributionText
         * 
         * @param {string} value 
         */
        SeriesDataWrapperModel.prototype.setAttributionText = function (value) {
            this.attributionText = value;
        };
    
        /**
         * The HTTP status code of the returned result.
         *
         * @return {int}
         */
        SeriesDataWrapperModel.prototype.getCode = function () {
            return this.code;
        };
    
        /**
         * Setter for Code
         * 
         * @param {int} value 
         */
        SeriesDataWrapperModel.prototype.setCode = function (value) {
            this.code = value;
        };
    
        /**
         * The copyright notice for the returned result.
         *
         * @return {string}
         */
        SeriesDataWrapperModel.prototype.getCopyright = function () {
            return this.copyright;
        };
    
        /**
         * Setter for Copyright
         * 
         * @param {string} value 
         */
        SeriesDataWrapperModel.prototype.setCopyright = function (value) {
            this.copyright = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesDataContainerModel}
         */
        SeriesDataWrapperModel.prototype.getData = function () {
            return this.data;
        };
    
        /**
         * Setter for Data
         * 
         * @param {SeriesDataContainerModel} value 
         */
        SeriesDataWrapperModel.prototype.setData = function (value) {
            this.data = value;
        };
    
        /**
         * A digest value of the content returned by the call.
         *
         * @return {string}
         */
        SeriesDataWrapperModel.prototype.getEtag = function () {
            return this.etag;
        };
    
        /**
         * Setter for Etag
         * 
         * @param {string} value 
         */
        SeriesDataWrapperModel.prototype.setEtag = function (value) {
            this.etag = value;
        };
    
        /**
         * A string description of the call status.
         *
         * @return {string}
         */
        SeriesDataWrapperModel.prototype.getStatus = function () {
            return this.status;
        };
    
        /**
         * Setter for Status
         * 
         * @param {string} value 
         */
        SeriesDataWrapperModel.prototype.setStatus = function (value) {
            this.status = value;
        };
    
        return SeriesDataWrapperModel;
    }

}(angular));
