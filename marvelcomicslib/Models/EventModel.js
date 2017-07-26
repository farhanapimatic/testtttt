/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of EventModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('EventModel', ['BaseModel', EventModelModel]);

    function EventModelModel(BaseModel) {
        var EventModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.characters = this.getValue(obj.characters);
            this.comics = this.getValue(obj.comics);
            this.creators = this.getValue(obj.creators);
            this.description = this.getValue(obj.description);
            this.end = this.getValue(obj.end);
            this.id = this.getValue(obj.id);
            this.modified = this.getValue(obj.modified);
            this.next = this.getValue(obj.next);
            this.previous = this.getValue(obj.previous);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.series = this.getValue(obj.series);
            this.start = this.getValue(obj.start);
            this.stories = this.getValue(obj.stories);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.title = this.getValue(obj.title);
            this.urls = this.getValue(obj.urls);
        };

        EventModel.prototype = new BaseModel();
        EventModel.prototype.constructor = EventModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        EventModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'characters', realName: 'characters', type: 'CharacterListModel' },
                { name: 'comics', realName: 'comics', type: 'ComicListModel' },
                { name: 'creators', realName: 'creators', type: 'CreatorListModel' },
                { name: 'description', realName: 'description' },
                { name: 'end', realName: 'end', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'id', realName: 'id' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'next', realName: 'next', type: 'EventSummaryModel' },
                { name: 'previous', realName: 'previous', type: 'EventSummaryModel' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'series', realName: 'series', type: 'SeriesListModel' },
                { name: 'start', realName: 'start', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'stories', realName: 'stories', type: 'StoryListModel' },
                { name: 'thumbnail', realName: 'thumbnail', type: 'ThumbnailModel' },
                { name: 'title', realName: 'title' },
                { name: 'urls', realName: 'urls', array: true, type: 'UrlModel' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CharacterListModel}
         */
        EventModel.prototype.getCharacters = function () {
            return this.characters;
        };
    
        /**
         * Setter for Characters
         * 
         * @param {CharacterListModel} value 
         */
        EventModel.prototype.setCharacters = function (value) {
            this.characters = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicListModel}
         */
        EventModel.prototype.getComics = function () {
            return this.comics;
        };
    
        /**
         * Setter for Comics
         * 
         * @param {ComicListModel} value 
         */
        EventModel.prototype.setComics = function (value) {
            this.comics = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CreatorListModel}
         */
        EventModel.prototype.getCreators = function () {
            return this.creators;
        };
    
        /**
         * Setter for Creators
         * 
         * @param {CreatorListModel} value 
         */
        EventModel.prototype.setCreators = function (value) {
            this.creators = value;
        };
    
        /**
         * A description of the event.
         *
         * @return {string}
         */
        EventModel.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        EventModel.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * The date of publication of the last issue in this event.
         *
         * @return {DateTime}
         */
        EventModel.prototype.getEnd = function () {
            return this.end;
        };
    
        /**
         * Setter for End
         * 
         * @param {DateTime} value 
         */
        EventModel.prototype.setEnd = function (value) {
            this.end = value;
        };
    
        /**
         * The unique ID of the event resource.
         *
         * @return {int}
         */
        EventModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        EventModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        EventModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        EventModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventSummaryModel}
         */
        EventModel.prototype.getNext = function () {
            return this.next;
        };
    
        /**
         * Setter for Next
         * 
         * @param {EventSummaryModel} value 
         */
        EventModel.prototype.setNext = function (value) {
            this.next = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventSummaryModel}
         */
        EventModel.prototype.getPrevious = function () {
            return this.previous;
        };
    
        /**
         * Setter for Previous
         * 
         * @param {EventSummaryModel} value 
         */
        EventModel.prototype.setPrevious = function (value) {
            this.previous = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        EventModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        EventModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesListModel}
         */
        EventModel.prototype.getSeries = function () {
            return this.series;
        };
    
        /**
         * Setter for Series
         * 
         * @param {SeriesListModel} value 
         */
        EventModel.prototype.setSeries = function (value) {
            this.series = value;
        };
    
        /**
         * The date of publication of the first issue in this event.
         *
         * @return {DateTime}
         */
        EventModel.prototype.getStart = function () {
            return this.start;
        };
    
        /**
         * Setter for Start
         * 
         * @param {DateTime} value 
         */
        EventModel.prototype.setStart = function (value) {
            this.start = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {StoryListModel}
         */
        EventModel.prototype.getStories = function () {
            return this.stories;
        };
    
        /**
         * Setter for Stories
         * 
         * @param {StoryListModel} value 
         */
        EventModel.prototype.setStories = function (value) {
            this.stories = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        EventModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        EventModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * The title of the event.
         *
         * @return {string}
         */
        EventModel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        EventModel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * A set of public web site URLs for the event.
         *
         * @return {array}
         */
        EventModel.prototype.getUrls = function () {
            return this.urls;
        };
    
        /**
         * Setter for Urls
         * 
         * @param {array} value 
         */
        EventModel.prototype.setUrls = function (value) {
            this.urls = value;
        };
    
        return EventModel;
    }

}(angular));
