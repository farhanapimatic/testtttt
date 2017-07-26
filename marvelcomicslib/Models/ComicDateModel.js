/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComicDateModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ComicDateModel', ['BaseModel', ComicDateModelModel]);

    function ComicDateModelModel(BaseModel) {
        var ComicDateModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.date = this.getValue(obj.date);
            this.type = this.getValue(obj.type);
        };

        ComicDateModel.prototype = new BaseModel();
        ComicDateModel.prototype.constructor = ComicDateModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComicDateModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'date', realName: 'date', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'type', realName: 'type' }
            ]);
        };
    
        /**
         * The date.
         *
         * @return {DateTime}
         */
        ComicDateModel.prototype.getDate = function () {
            return this.date;
        };
    
        /**
         * Setter for Date
         * 
         * @param {DateTime} value 
         */
        ComicDateModel.prototype.setDate = function (value) {
            this.date = value;
        };
    
        /**
         * A description of the date (e.g. onsale date, FOC date).
         *
         * @return {string}
         */
        ComicDateModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        ComicDateModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        return ComicDateModel;
    }

}(angular));
