/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComicPriceModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ComicPriceModel', ['BaseModel', ComicPriceModelModel]);

    function ComicPriceModelModel(BaseModel) {
        var ComicPriceModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.price = this.getValue(obj.price);
            this.type = this.getValue(obj.type);
        };

        ComicPriceModel.prototype = new BaseModel();
        ComicPriceModel.prototype.constructor = ComicPriceModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComicPriceModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'price', realName: 'price' },
                { name: 'type', realName: 'type' }
            ]);
        };
    
        /**
         * The price (all prices in USD).
         *
         * @return {double}
         */
        ComicPriceModel.prototype.getPrice = function () {
            return this.price;
        };
    
        /**
         * Setter for Price
         * 
         * @param {double} value 
         */
        ComicPriceModel.prototype.setPrice = function (value) {
            this.price = value;
        };
    
        /**
         * A description of the price (e.g. print price, digital price).
         *
         * @return {string}
         */
        ComicPriceModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        ComicPriceModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        return ComicPriceModel;
    }

}(angular));
