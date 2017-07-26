/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CreatorModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CreatorModel', ['BaseModel', CreatorModelModel]);

    function CreatorModelModel(BaseModel) {
        var CreatorModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.comics = this.getValue(obj.comics);
            this.events = this.getValue(obj.events);
            this.firstName = this.getValue(obj.firstName);
            this.fullName = this.getValue(obj.fullName);
            this.id = this.getValue(obj.id);
            this.lastName = this.getValue(obj.lastName);
            this.middleName = this.getValue(obj.middleName);
            this.modified = this.getValue(obj.modified);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.series = this.getValue(obj.series);
            this.stories = this.getValue(obj.stories);
            this.suffix = this.getValue(obj.suffix);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.urls = this.getValue(obj.urls);
        };

        CreatorModel.prototype = new BaseModel();
        CreatorModel.prototype.constructor = CreatorModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CreatorModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'comics', realName: 'comics', type: 'ComicListModel' },
                { name: 'events', realName: 'events', type: 'EventListModel' },
                { name: 'firstName', realName: 'firstName' },
                { name: 'fullName', realName: 'fullName' },
                { name: 'id', realName: 'id' },
                { name: 'lastName', realName: 'lastName' },
                { name: 'middleName', realName: 'middleName' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'series', realName: 'series', type: 'SeriesListModel' },
                { name: 'stories', realName: 'stories', type: 'StoryListModel' },
                { name: 'suffix', realName: 'suffix' },
                { name: 'thumbnail', realName: 'thumbnail', type: 'ThumbnailModel' },
                { name: 'urls', realName: 'urls', array: true, type: 'UrlModel' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicListModel}
         */
        CreatorModel.prototype.getComics = function () {
            return this.comics;
        };
    
        /**
         * Setter for Comics
         * 
         * @param {ComicListModel} value 
         */
        CreatorModel.prototype.setComics = function (value) {
            this.comics = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventListModel}
         */
        CreatorModel.prototype.getEvents = function () {
            return this.events;
        };
    
        /**
         * Setter for Events
         * 
         * @param {EventListModel} value 
         */
        CreatorModel.prototype.setEvents = function (value) {
            this.events = value;
        };
    
        /**
         * The first name of the creator.
         *
         * @return {string}
         */
        CreatorModel.prototype.getFirstName = function () {
            return this.firstName;
        };
    
        /**
         * Setter for FirstName
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setFirstName = function (value) {
            this.firstName = value;
        };
    
        /**
         * The full name of the creator (a space-separated concatenation of the above four fields).
         *
         * @return {string}
         */
        CreatorModel.prototype.getFullName = function () {
            return this.fullName;
        };
    
        /**
         * Setter for FullName
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setFullName = function (value) {
            this.fullName = value;
        };
    
        /**
         * The unique ID of the creator resource.
         *
         * @return {int}
         */
        CreatorModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        CreatorModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * The last name of the creator.
         *
         * @return {string}
         */
        CreatorModel.prototype.getLastName = function () {
            return this.lastName;
        };
    
        /**
         * Setter for LastName
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setLastName = function (value) {
            this.lastName = value;
        };
    
        /**
         * The middle name of the creator.
         *
         * @return {string}
         */
        CreatorModel.prototype.getMiddleName = function () {
            return this.middleName;
        };
    
        /**
         * Setter for MiddleName
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setMiddleName = function (value) {
            this.middleName = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        CreatorModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        CreatorModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        CreatorModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesListModel}
         */
        CreatorModel.prototype.getSeries = function () {
            return this.series;
        };
    
        /**
         * Setter for Series
         * 
         * @param {SeriesListModel} value 
         */
        CreatorModel.prototype.setSeries = function (value) {
            this.series = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {StoryListModel}
         */
        CreatorModel.prototype.getStories = function () {
            return this.stories;
        };
    
        /**
         * Setter for Stories
         * 
         * @param {StoryListModel} value 
         */
        CreatorModel.prototype.setStories = function (value) {
            this.stories = value;
        };
    
        /**
         * The suffix or honorific for the creator.
         *
         * @return {string}
         */
        CreatorModel.prototype.getSuffix = function () {
            return this.suffix;
        };
    
        /**
         * Setter for Suffix
         * 
         * @param {string} value 
         */
        CreatorModel.prototype.setSuffix = function (value) {
            this.suffix = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        CreatorModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        CreatorModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * A set of public web site URLs for the resource.
         *
         * @return {array}
         */
        CreatorModel.prototype.getUrls = function () {
            return this.urls;
        };
    
        /**
         * Setter for Urls
         * 
         * @param {array} value 
         */
        CreatorModel.prototype.setUrls = function (value) {
            this.urls = value;
        };
    
        return CreatorModel;
    }

}(angular));
