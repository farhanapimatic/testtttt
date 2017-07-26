/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';

angular.module('MarvelComicsLib')
	.factory('ObjectMapper', ['ModelFactory', 'moment', ObjectMapper]);

	/**
	 * ObjectMapper is utility service that helps maps a POJO to a model or exception object.
	 * Embedded models and dates are also instantiated to their correct types.
	 */
	function ObjectMapper(ModelFactory, moment) {

	    /**
	     * Returns Datetime parsed value for field
	     * @param  propName  {string}  Name of the field
	     * @param  type   {string}  The Datetime format of the field
	     * @returns       {object}  Parsed Datetime object
	     */
	    var parseDateTime = function(propName, type) {
	        if (propName === null || propName === undefined) {
	            return null;
	        }
	        switch (type) {
	        case 'unixtimestamp':
	            return new Date(propName).getTime();
	        case 'rfc1123':
	            return new Date(propName).toUTCString();
	        case 'rfc3339':
	            return moment(propName).parseZone().format();
	        case 'date':
	            return moment(propName).format('YYYY-MM-DD');
	        default:
	            return moment(propName).format('YYYY-MM-DD');
	        }
	    };

        /**
		 * Helper function to map input object with model fields
		 * @param  json  {object}  Input object to be mapped onto model fields
		 * @param  modelName  {string}  The name of model to instantiate
		 * @returns           {object}  Object containing mapped fields of model
		 */
		var mapObject = function(json, modelName) {
		    if (json === null || json === undefined) {
		        return null;
		    }
		    return this.mapFields(json, ModelFactory.getInstance(modelName));
		};

	    /**
	     * Maps the instance's fields with the values in input object
	     * The function helps in deserializing a model instance
	     * @param  json  {object}  Input object to be mapped onto model fields
	     * @param  instance  {object}  The instance of the model class
	     * @returns          {object}  Mapped instance of model class
	     */
	    var mapFields = function(json, instance) {
	        var returnInstance = instance;
	        var fieldsInfo = instance.mappingInfo();
	        fieldsInfo.forEach((fieldInfo) => {
	            if (fieldInfo.type) {
	                if (fieldInfo.array) {
	                    if (json[fieldInfo.realName] !== null &&
	                          json[fieldInfo.realName] !== undefined) {
	                        returnInstance[fieldInfo.name] = json[fieldInfo.realName].map(obj =>
	                            this.mapObject(obj, fieldInfo.type));
	                    }
	                } else {
	                    returnInstance[fieldInfo.name] =
	                        this.mapObject(json[fieldInfo.realName], fieldInfo.type);
	                }
	            } else if (fieldInfo.isDateTime) {
	                returnInstance[fieldInfo.name] =
	                    json[fieldInfo.realName] === null || json[fieldInfo.realName] === undefined ?
	                        json[fieldInfo.realName] :
	                        this.parseDateTime(json[fieldInfo.realName],
	                            fieldInfo.dateTimeValue);
	            } else {
	                returnInstance[fieldInfo.name] =
	                    json[fieldInfo.realName] === null || json[fieldInfo.realName] === undefined ?
	                        instance[fieldInfo.name] :
	                        json[fieldInfo.realName];
	            }
	        });
	        return returnInstance;
	    };


		return {
			parseDateTime: parseDateTime,
			mapObject: mapObject,
			mapFields: mapFields
		};

	}


}(angular));
