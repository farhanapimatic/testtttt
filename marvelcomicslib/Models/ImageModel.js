/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ImageModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ImageModel', ['BaseModel', ImageModelModel]);

    function ImageModelModel(BaseModel) {
        var ImageModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.extension = this.getValue(obj.extension);
            this.path = this.getValue(obj.path);
        };

        ImageModel.prototype = new BaseModel();
        ImageModel.prototype.constructor = ImageModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ImageModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'extension', realName: 'extension' },
                { name: 'path', realName: 'path' }
            ]);
        };
    
        /**
         * The file extension for the image.
         *
         * @return {string}
         */
        ImageModel.prototype.getExtension = function () {
            return this.extension;
        };
    
        /**
         * Setter for Extension
         * 
         * @param {string} value 
         */
        ImageModel.prototype.setExtension = function (value) {
            this.extension = value;
        };
    
        /**
         * The directory path of to the image.
         *
         * @return {string}
         */
        ImageModel.prototype.getPath = function () {
            return this.path;
        };
    
        /**
         * Setter for Path
         * 
         * @param {string} value 
         */
        ImageModel.prototype.setPath = function (value) {
            this.path = value;
        };
    
        return ImageModel;
    }

}(angular));
