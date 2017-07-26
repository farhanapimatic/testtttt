/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ThumbnailModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ThumbnailModel', ['BaseModel', ThumbnailModelModel]);

    function ThumbnailModelModel(BaseModel) {
        var ThumbnailModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.extension = this.getValue(obj.extension);
            this.path = this.getValue(obj.path);
        };

        ThumbnailModel.prototype = new BaseModel();
        ThumbnailModel.prototype.constructor = ThumbnailModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ThumbnailModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'extension', realName: 'extension' },
                { name: 'path', realName: 'path' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        ThumbnailModel.prototype.getExtension = function () {
            return this.extension;
        };
    
        /**
         * Setter for Extension
         * 
         * @param {string} value 
         */
        ThumbnailModel.prototype.setExtension = function (value) {
            this.extension = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        ThumbnailModel.prototype.getPath = function () {
            return this.path;
        };
    
        /**
         * Setter for Path
         * 
         * @param {string} value 
         */
        ThumbnailModel.prototype.setPath = function (value) {
            this.path = value;
        };
    
        return ThumbnailModel;
    }

}(angular));
