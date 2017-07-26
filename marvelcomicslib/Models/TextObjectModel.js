/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of TextObjectModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('TextObjectModel', ['BaseModel', TextObjectModelModel]);

    function TextObjectModelModel(BaseModel) {
        var TextObjectModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.language = this.getValue(obj.language);
            this.text = this.getValue(obj.text);
            this.type = this.getValue(obj.type);
        };

        TextObjectModel.prototype = new BaseModel();
        TextObjectModel.prototype.constructor = TextObjectModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        TextObjectModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'language', realName: 'language' },
                { name: 'text', realName: 'text' },
                { name: 'type', realName: 'type' }
            ]);
        };
    
        /**
         * The IETF language tag denoting the language the text object is written in.
         *
         * @return {string}
         */
        TextObjectModel.prototype.getLanguage = function () {
            return this.language;
        };
    
        /**
         * Setter for Language
         * 
         * @param {string} value 
         */
        TextObjectModel.prototype.setLanguage = function (value) {
            this.language = value;
        };
    
        /**
         * The text.
         *
         * @return {string}
         */
        TextObjectModel.prototype.getText = function () {
            return this.text;
        };
    
        /**
         * Setter for Text
         * 
         * @param {string} value 
         */
        TextObjectModel.prototype.setText = function (value) {
            this.text = value;
        };
    
        /**
         * The canonical type of the text object (e.g. solicit text, preview text, etc.).
         *
         * @return {string}
         */
        TextObjectModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        TextObjectModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        return TextObjectModel;
    }

}(angular));
