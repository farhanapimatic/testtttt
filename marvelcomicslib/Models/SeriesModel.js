/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of SeriesModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('SeriesModel', ['BaseModel', SeriesModelModel]);

    function SeriesModelModel(BaseModel) {
        var SeriesModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.characters = this.getValue(obj.characters);
            this.comics = this.getValue(obj.comics);
            this.creators = this.getValue(obj.creators);
            this.description = this.getValue(obj.description);
            this.endYear = this.getValue(obj.endYear);
            this.events = this.getValue(obj.events);
            this.id = this.getValue(obj.id);
            this.modified = this.getValue(obj.modified);
            this.next = this.getValue(obj.next);
            this.previous = this.getValue(obj.previous);
            this.rating = this.getValue(obj.rating);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.startYear = this.getValue(obj.startYear);
            this.stories = this.getValue(obj.stories);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.title = this.getValue(obj.title);
            this.urls = this.getValue(obj.urls);
        };

        SeriesModel.prototype = new BaseModel();
        SeriesModel.prototype.constructor = SeriesModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        SeriesModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'characters', realName: 'characters', type: 'CharacterListModel' },
                { name: 'comics', realName: 'comics', type: 'ComicListModel' },
                { name: 'creators', realName: 'creators', type: 'CreatorListModel' },
                { name: 'description', realName: 'description' },
                { name: 'endYear', realName: 'endYear' },
                { name: 'events', realName: 'events', type: 'EventListModel' },
                { name: 'id', realName: 'id' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'next', realName: 'next', type: 'SeriesSummaryModel' },
                { name: 'previous', realName: 'previous', type: 'SeriesSummaryModel' },
                { name: 'rating', realName: 'rating' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'startYear', realName: 'startYear' },
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
        SeriesModel.prototype.getCharacters = function () {
            return this.characters;
        };
    
        /**
         * Setter for Characters
         * 
         * @param {CharacterListModel} value 
         */
        SeriesModel.prototype.setCharacters = function (value) {
            this.characters = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ComicListModel}
         */
        SeriesModel.prototype.getComics = function () {
            return this.comics;
        };
    
        /**
         * Setter for Comics
         * 
         * @param {ComicListModel} value 
         */
        SeriesModel.prototype.setComics = function (value) {
            this.comics = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CreatorListModel}
         */
        SeriesModel.prototype.getCreators = function () {
            return this.creators;
        };
    
        /**
         * Setter for Creators
         * 
         * @param {CreatorListModel} value 
         */
        SeriesModel.prototype.setCreators = function (value) {
            this.creators = value;
        };
    
        /**
         * A description of the series.
         *
         * @return {string}
         */
        SeriesModel.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        SeriesModel.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * The last year of publication for the series (conventionally, 2099 for ongoing series) .
         *
         * @return {int}
         */
        SeriesModel.prototype.getEndYear = function () {
            return this.endYear;
        };
    
        /**
         * Setter for EndYear
         * 
         * @param {int} value 
         */
        SeriesModel.prototype.setEndYear = function (value) {
            this.endYear = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventListModel}
         */
        SeriesModel.prototype.getEvents = function () {
            return this.events;
        };
    
        /**
         * Setter for Events
         * 
         * @param {EventListModel} value 
         */
        SeriesModel.prototype.setEvents = function (value) {
            this.events = value;
        };
    
        /**
         * The unique ID of the series resource.
         *
         * @return {int}
         */
        SeriesModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        SeriesModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        SeriesModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        SeriesModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesSummaryModel}
         */
        SeriesModel.prototype.getNext = function () {
            return this.next;
        };
    
        /**
         * Setter for Next
         * 
         * @param {SeriesSummaryModel} value 
         */
        SeriesModel.prototype.setNext = function (value) {
            this.next = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesSummaryModel}
         */
        SeriesModel.prototype.getPrevious = function () {
            return this.previous;
        };
    
        /**
         * Setter for Previous
         * 
         * @param {SeriesSummaryModel} value 
         */
        SeriesModel.prototype.setPrevious = function (value) {
            this.previous = value;
        };
    
        /**
         * The age-appropriateness rating for the series.
         *
         * @return {string}
         */
        SeriesModel.prototype.getRating = function () {
            return this.rating;
        };
    
        /**
         * Setter for Rating
         * 
         * @param {string} value 
         */
        SeriesModel.prototype.setRating = function (value) {
            this.rating = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        SeriesModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        SeriesModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * The first year of publication for the series.
         *
         * @return {int}
         */
        SeriesModel.prototype.getStartYear = function () {
            return this.startYear;
        };
    
        /**
         * Setter for StartYear
         * 
         * @param {int} value 
         */
        SeriesModel.prototype.setStartYear = function (value) {
            this.startYear = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {StoryListModel}
         */
        SeriesModel.prototype.getStories = function () {
            return this.stories;
        };
    
        /**
         * Setter for Stories
         * 
         * @param {StoryListModel} value 
         */
        SeriesModel.prototype.setStories = function (value) {
            this.stories = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        SeriesModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        SeriesModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * The canonical title of the series.
         *
         * @return {string}
         */
        SeriesModel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        SeriesModel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * A set of public web site URLs for the resource.
         *
         * @return {array}
         */
        SeriesModel.prototype.getUrls = function () {
            return this.urls;
        };
    
        /**
         * Setter for Urls
         * 
         * @param {array} value 
         */
        SeriesModel.prototype.setUrls = function (value) {
            this.urls = value;
        };
    
        return SeriesModel;
    }

}(angular));
