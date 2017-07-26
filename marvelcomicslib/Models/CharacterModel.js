/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of CharacterModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('CharacterModel', ['BaseModel', CharacterModelModel]);

    function CharacterModelModel(BaseModel) {
        var CharacterModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.comics = this.getValue(obj.comics);
            this.description = this.getValue(obj.description);
            this.events = this.getValue(obj.events);
            this.id = this.getValue(obj.id);
            this.modified = this.getValue(obj.modified);
            this.name = this.getValue(obj.name);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.series = this.getValue(obj.series);
            this.stories = this.getValue(obj.stories);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.urls = this.getValue(obj.urls);
        };

        CharacterModel.prototype = new BaseModel();
        CharacterModel.prototype.constructor = CharacterModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        CharacterModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'comics', realName: 'comics', type: 'ComicListModel' },
                { name: 'description', realName: 'description' },
                { name: 'events', realName: 'events', type: 'EventListModel' },
                { name: 'id', realName: 'id' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'name', realName: 'name' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'series', realName: 'series', type: 'SeriesListModel' },
                { name: 'stories', realName: 'stories', type: 'StoryListModel' },
                { name: 'thumbnail', realName: 'thumbnail', type: 'ThumbnailModel' },
                { name: 'urls', realName: 'urls', array: true, type: 'UrlModel' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicListModel}
         */
        CharacterModel.prototype.getComics = function () {
            return this.comics;
        };
    
        /**
         * Setter for Comics
         * 
         * @param {ComicListModel} value 
         */
        CharacterModel.prototype.setComics = function (value) {
            this.comics = value;
        };
    
        /**
         * A short bio or description of the character.
         *
         * @return {string}
         */
        CharacterModel.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        CharacterModel.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventListModel}
         */
        CharacterModel.prototype.getEvents = function () {
            return this.events;
        };
    
        /**
         * Setter for Events
         * 
         * @param {EventListModel} value 
         */
        CharacterModel.prototype.setEvents = function (value) {
            this.events = value;
        };
    
        /**
         * The unique ID of the character resource.
         *
         * @return {int}
         */
        CharacterModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        CharacterModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        CharacterModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        CharacterModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * The name of the character.
         *
         * @return {string}
         */
        CharacterModel.prototype.getName = function () {
            return this.name;
        };
    
        /**
         * Setter for Name
         * 
         * @param {string} value 
         */
        CharacterModel.prototype.setName = function (value) {
            this.name = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        CharacterModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        CharacterModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesListModel}
         */
        CharacterModel.prototype.getSeries = function () {
            return this.series;
        };
    
        /**
         * Setter for Series
         * 
         * @param {SeriesListModel} value 
         */
        CharacterModel.prototype.setSeries = function (value) {
            this.series = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {StoryListModel}
         */
        CharacterModel.prototype.getStories = function () {
            return this.stories;
        };
    
        /**
         * Setter for Stories
         * 
         * @param {StoryListModel} value 
         */
        CharacterModel.prototype.setStories = function (value) {
            this.stories = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        CharacterModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        CharacterModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * A set of public web site URLs for the resource.
         *
         * @return {array}
         */
        CharacterModel.prototype.getUrls = function () {
            return this.urls;
        };
    
        /**
         * Setter for Urls
         * 
         * @param {array} value 
         */
        CharacterModel.prototype.setUrls = function (value) {
            this.urls = value;
        };
    
        return CharacterModel;
    }

}(angular));
