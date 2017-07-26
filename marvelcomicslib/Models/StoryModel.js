/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of StoryModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('StoryModel', ['BaseModel', StoryModelModel]);

    function StoryModelModel(BaseModel) {
        var StoryModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.characters = this.getValue(obj.characters);
            this.comics = this.getValue(obj.comics);
            this.creators = this.getValue(obj.creators);
            this.description = this.getValue(obj.description);
            this.events = this.getValue(obj.events);
            this.id = this.getValue(obj.id);
            this.modified = this.getValue(obj.modified);
            this.originalissue = this.getValue(obj.originalissue);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.series = this.getValue(obj.series);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.title = this.getValue(obj.title);
            this.type = this.getValue(obj.type);
        };

        StoryModel.prototype = new BaseModel();
        StoryModel.prototype.constructor = StoryModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        StoryModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'characters', realName: 'characters', type: 'CharacterListModel' },
                { name: 'comics', realName: 'comics', type: 'ComicListModel' },
                { name: 'creators', realName: 'creators', type: 'CreatorListModel' },
                { name: 'description', realName: 'description' },
                { name: 'events', realName: 'events', type: 'EventListModel' },
                { name: 'id', realName: 'id' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'originalissue', realName: 'originalissue', type: 'ComicSummaryModel' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'series', realName: 'series', type: 'SeriesListModel' },
                { name: 'thumbnail', realName: 'thumbnail', type: 'ThumbnailModel' },
                { name: 'title', realName: 'title' },
                { name: 'type', realName: 'type' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CharacterListModel}
         */
        StoryModel.prototype.getCharacters = function () {
            return this.characters;
        };
    
        /**
         * Setter for Characters
         * 
         * @param {CharacterListModel} value 
         */
        StoryModel.prototype.setCharacters = function (value) {
            this.characters = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicListModel}
         */
        StoryModel.prototype.getComics = function () {
            return this.comics;
        };
    
        /**
         * Setter for Comics
         * 
         * @param {ComicListModel} value 
         */
        StoryModel.prototype.setComics = function (value) {
            this.comics = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CreatorListModel}
         */
        StoryModel.prototype.getCreators = function () {
            return this.creators;
        };
    
        /**
         * Setter for Creators
         * 
         * @param {CreatorListModel} value 
         */
        StoryModel.prototype.setCreators = function (value) {
            this.creators = value;
        };
    
        /**
         * A short description of the story.
         *
         * @return {string}
         */
        StoryModel.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        StoryModel.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventListModel}
         */
        StoryModel.prototype.getEvents = function () {
            return this.events;
        };
    
        /**
         * Setter for Events
         * 
         * @param {EventListModel} value 
         */
        StoryModel.prototype.setEvents = function (value) {
            this.events = value;
        };
    
        /**
         * The unique ID of the story resource.
         *
         * @return {int}
         */
        StoryModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        StoryModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        StoryModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        StoryModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicSummaryModel}
         */
        StoryModel.prototype.getOriginalissue = function () {
            return this.originalissue;
        };
    
        /**
         * Setter for Originalissue
         * 
         * @param {ComicSummaryModel} value 
         */
        StoryModel.prototype.setOriginalissue = function (value) {
            this.originalissue = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        StoryModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        StoryModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesListModel}
         */
        StoryModel.prototype.getSeries = function () {
            return this.series;
        };
    
        /**
         * Setter for Series
         * 
         * @param {SeriesListModel} value 
         */
        StoryModel.prototype.setSeries = function (value) {
            this.series = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        StoryModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        StoryModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * The story title.
         *
         * @return {string}
         */
        StoryModel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        StoryModel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * The story type e.g. interior story, cover, text story.
         *
         * @return {string}
         */
        StoryModel.prototype.getType = function () {
            return this.type;
        };
    
        /**
         * Setter for Type
         * 
         * @param {string} value 
         */
        StoryModel.prototype.setType = function (value) {
            this.type = value;
        };
    
        return StoryModel;
    }

}(angular));
