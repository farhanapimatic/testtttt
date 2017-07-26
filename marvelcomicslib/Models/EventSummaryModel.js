/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EventSummaryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('EventSummaryModel', ['BaseModel', EventSummaryModelModel]);

    function EventSummaryModelModel(BaseModel) {
        var EventSummaryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
        };

        EventSummaryModel.prototype = new BaseModel();
        EventSummaryModel.prototype.constructor = EventSummaryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EventSummaryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' }
            ]);
        };
    
        /**
         * The name of the event.
         *
         * @return {string}
         */
        EventSummaryModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        EventSummaryModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The path to the individual event resource.
         *
         * @return {string}
         */
        EventSummaryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        EventSummaryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        return EventSummaryModel;
    }

}(angular));
