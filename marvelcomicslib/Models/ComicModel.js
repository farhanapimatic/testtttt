/**
 * MarvelComicsLib
 *
 * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ComicModel
 *
 * @constructor
 */
angular.module('MarvelComicsLib')
    .factory('ComicModel', ['BaseModel', ComicModelModel]);

    function ComicModelModel(BaseModel) {
        var ComicModel = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.characters = this.getValue(obj.characters);
            this.collectedIssues = this.getValue(obj.collectedIssues);
            this.collections = this.getValue(obj.collections);
            this.creators = this.getValue(obj.creators);
            this.dates = this.getValue(obj.dates);
            this.description = this.getValue(obj.description);
            this.diamondCode = this.getValue(obj.diamondCode);
            this.digitalId = this.getValue(obj.digitalId);
            this.ean = this.getValue(obj.ean);
            this.events = this.getValue(obj.events);
            this.format = this.getValue(obj.format);
            this.id = this.getValue(obj.id);
            this.images = this.getValue(obj.images);
            this.isbn = this.getValue(obj.isbn);
            this.issn = this.getValue(obj.issn);
            this.issueNumber = this.getValue(obj.issueNumber);
            this.modified = this.getValue(obj.modified);
            this.pageCount = this.getValue(obj.pageCount);
            this.prices = this.getValue(obj.prices);
            this.resourceURI = this.getValue(obj.resourceURI);
            this.series = this.getValue(obj.series);
            this.stories = this.getValue(obj.stories);
            this.textObjects = this.getValue(obj.textObjects);
            this.thumbnail = this.getValue(obj.thumbnail);
            this.title = this.getValue(obj.title);
            this.upc = this.getValue(obj.upc);
            this.urls = this.getValue(obj.urls);
            this.variantDescription = this.getValue(obj.variantDescription);
            this.variants = this.getValue(obj.variants);
        };

        ComicModel.prototype = new BaseModel();
        ComicModel.prototype.constructor = ComicModel;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ComicModel.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'characters', realName: 'characters', type: 'CharacterListModel' },
                { name: 'collectedIssues', realName: 'collectedIssues', array: true, type: 'ComicSummaryModel' },
                { name: 'collections', realName: 'collections', array: true, type: 'ComicSummaryModel' },
                { name: 'creators', realName: 'creators', type: 'CreatorListModel' },
                { name: 'dates', realName: 'dates', array: true, type: 'ComicDateModel' },
                { name: 'description', realName: 'description' },
                { name: 'diamondCode', realName: 'diamondCode' },
                { name: 'digitalId', realName: 'digitalId' },
                { name: 'ean', realName: 'ean' },
                { name: 'events', realName: 'events', type: 'EventListModel' },
                { name: 'format', realName: 'format' },
                { name: 'id', realName: 'id' },
                { name: 'images', realName: 'images', array: true, type: 'ImageModel' },
                { name: 'isbn', realName: 'isbn' },
                { name: 'issn', realName: 'issn' },
                { name: 'issueNumber', realName: 'issueNumber' },
                { name: 'modified', realName: 'modified', isDateTime: true, dateTimeValue: 'rfc3339' },
                { name: 'pageCount', realName: 'pageCount' },
                { name: 'prices', realName: 'prices', array: true, type: 'ComicPriceModel' },
                { name: 'resourceURI', realName: 'resourceURI' },
                { name: 'series', realName: 'series', type: 'SeriesSummaryModel' },
                { name: 'stories', realName: 'stories', type: 'StoryListModel' },
                { name: 'textObjects', realName: 'textObjects', array: true, type: 'TextObjectModel' },
                { name: 'thumbnail', realName: 'thumbnail', type: 'ThumbnailModel' },
                { name: 'title', realName: 'title' },
                { name: 'upc', realName: 'upc' },
                { name: 'urls', realName: 'urls', array: true, type: 'UrlModel' },
                { name: 'variantDescription', realName: 'variantDescription' },
                { name: 'variants', realName: 'variants', array: true, type: 'ComicSummaryModel' }
            ]);
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CharacterListModel}
         */
        ComicModel.prototype.getCharacters = function () {
            return this.characters;
        };
    
        /**
         * Setter for Characters
         * 
         * @param {CharacterListModel} value 
         */
        ComicModel.prototype.setCharacters = function (value) {
            this.characters = value;
        };
    
        /**
         * A list of issues collected in this comic (will generally be empty for periodical formats such as "comic"
         * or "magazine").
         *
         * @return {array}
         */
        ComicModel.prototype.getCollectedIssues = function () {
            return this.collectedIssues;
        };
    
        /**
         * Setter for CollectedIssues
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setCollectedIssues = function (value) {
            this.collectedIssues = value;
        };
    
        /**
         * A list of collections which include this comic (will generally be empty if the comic's format is a
         * collection).
         *
         * @return {array}
         */
        ComicModel.prototype.getCollections = function () {
            return this.collections;
        };
    
        /**
         * Setter for Collections
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setCollections = function (value) {
            this.collections = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CreatorListModel}
         */
        ComicModel.prototype.getCreators = function () {
            return this.creators;
        };
    
        /**
         * Setter for Creators
         * 
         * @param {CreatorListModel} value 
         */
        ComicModel.prototype.setCreators = function (value) {
            this.creators = value;
        };
    
        /**
         * A list of key dates for this comic.
         *
         * @return {array}
         */
        ComicModel.prototype.getDates = function () {
            return this.dates;
        };
    
        /**
         * Setter for Dates
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setDates = function (value) {
            this.dates = value;
        };
    
        /**
         * The preferred description of the comic.
         *
         * @return {string}
         */
        ComicModel.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * The Diamond code for the comic.
         *
         * @return {string}
         */
        ComicModel.prototype.getDiamondCode = function () {
            return this.diamondCode;
        };
    
        /**
         * Setter for DiamondCode
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setDiamondCode = function (value) {
            this.diamondCode = value;
        };
    
        /**
         * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available
         * digitally.
         *
         * @return {int}
         */
        ComicModel.prototype.getDigitalId = function () {
            return this.digitalId;
        };
    
        /**
         * Setter for DigitalId
         * 
         * @param {int} value 
         */
        ComicModel.prototype.setDigitalId = function (value) {
            this.digitalId = value;
        };
    
        /**
         * The EAN barcode for the comic.
         *
         * @return {string}
         */
        ComicModel.prototype.getEan = function () {
            return this.ean;
        };
    
        /**
         * Setter for Ean
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setEan = function (value) {
            this.ean = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {EventListModel}
         */
        ComicModel.prototype.getEvents = function () {
            return this.events;
        };
    
        /**
         * Setter for Events
         * 
         * @param {EventListModel} value 
         */
        ComicModel.prototype.setEvents = function (value) {
            this.events = value;
        };
    
        /**
         * The publication format of the comic e.g. comic, hardcover, trade paperback.
         *
         * @return {string}
         */
        ComicModel.prototype.getFormat = function () {
            return this.format;
        };
    
        /**
         * Setter for Format
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setFormat = function (value) {
            this.format = value;
        };
    
        /**
         * The unique ID of the comic resource.
         *
         * @return {int}
         */
        ComicModel.prototype.getId = function () {
            return this.id;
        };
    
        /**
         * Setter for Id
         * 
         * @param {int} value 
         */
        ComicModel.prototype.setId = function (value) {
            this.id = value;
        };
    
        /**
         * A list of promotional images associated with this comic.
         *
         * @return {array}
         */
        ComicModel.prototype.getImages = function () {
            return this.images;
        };
    
        /**
         * Setter for Images
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setImages = function (value) {
            this.images = value;
        };
    
        /**
         * The ISBN for the comic (generally only populated for collection formats).
         *
         * @return {string}
         */
        ComicModel.prototype.getIsbn = function () {
            return this.isbn;
        };
    
        /**
         * Setter for Isbn
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setIsbn = function (value) {
            this.isbn = value;
        };
    
        /**
         * The ISSN barcode for the comic.
         *
         * @return {string}
         */
        ComicModel.prototype.getIssn = function () {
            return this.issn;
        };
    
        /**
         * Setter for Issn
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setIssn = function (value) {
            this.issn = value;
        };
    
        /**
         * The number of the issue in the series (will generally be 0 for collection formats).
         *
         * @return {int}
         */
        ComicModel.prototype.getIssueNumber = function () {
            return this.issueNumber;
        };
    
        /**
         * Setter for IssueNumber
         * 
         * @param {int} value 
         */
        ComicModel.prototype.setIssueNumber = function (value) {
            this.issueNumber = value;
        };
    
        /**
         * The date the resource was most recently modified.
         *
         * @return {DateTime}
         */
        ComicModel.prototype.getModified = function () {
            return this.modified;
        };
    
        /**
         * Setter for Modified
         * 
         * @param {DateTime} value 
         */
        ComicModel.prototype.setModified = function (value) {
            this.modified = value;
        };
    
        /**
         * The number of story pages in the comic.
         *
         * @return {int}
         */
        ComicModel.prototype.getPageCount = function () {
            return this.pageCount;
        };
    
        /**
         * Setter for PageCount
         * 
         * @param {int} value 
         */
        ComicModel.prototype.setPageCount = function (value) {
            this.pageCount = value;
        };
    
        /**
         * A list of prices for this comic.
         *
         * @return {array}
         */
        ComicModel.prototype.getPrices = function () {
            return this.prices;
        };
    
        /**
         * Setter for Prices
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setPrices = function (value) {
            this.prices = value;
        };
    
        /**
         * The canonical URL identifier for this resource.
         *
         * @return {string}
         */
        ComicModel.prototype.getResourceURI = function () {
            return this.resourceURI;
        };
    
        /**
         * Setter for ResourceURI
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setResourceURI = function (value) {
            this.resourceURI = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SeriesSummaryModel}
         */
        ComicModel.prototype.getSeries = function () {
            return this.series;
        };
    
        /**
         * Setter for Series
         * 
         * @param {SeriesSummaryModel} value 
         */
        ComicModel.prototype.setSeries = function (value) {
            this.series = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {StoryListModel}
         */
        ComicModel.prototype.getStories = function () {
            return this.stories;
        };
    
        /**
         * Setter for Stories
         * 
         * @param {StoryListModel} value 
         */
        ComicModel.prototype.setStories = function (value) {
            this.stories = value;
        };
    
        /**
         * A set of descriptive text blurbs for the comic.
         *
         * @return {array}
         */
        ComicModel.prototype.getTextObjects = function () {
            return this.textObjects;
        };
    
        /**
         * Setter for TextObjects
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setTextObjects = function (value) {
            this.textObjects = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {ThumbnailModel}
         */
        ComicModel.prototype.getThumbnail = function () {
            return this.thumbnail;
        };
    
        /**
         * Setter for Thumbnail
         * 
         * @param {ThumbnailModel} value 
         */
        ComicModel.prototype.setThumbnail = function (value) {
            this.thumbnail = value;
        };
    
        /**
         * The canonical title of the comic.
         *
         * @return {string}
         */
        ComicModel.prototype.getTitle = function () {
            return this.title;
        };
    
        /**
         * Setter for Title
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setTitle = function (value) {
            this.title = value;
        };
    
        /**
         * The UPC barcode number for the comic (generally only populated for periodical formats).
         *
         * @return {string}
         */
        ComicModel.prototype.getUpc = function () {
            return this.upc;
        };
    
        /**
         * Setter for Upc
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setUpc = function (value) {
            this.upc = value;
        };
    
        /**
         * A set of public web site URLs for the resource.
         *
         * @return {array}
         */
        ComicModel.prototype.getUrls = function () {
            return this.urls;
        };
    
        /**
         * Setter for Urls
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setUrls = function (value) {
            this.urls = value;
        };
    
        /**
         * If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text
         * description of the variant.
         *
         * @return {string}
         */
        ComicModel.prototype.getVariantDescription = function () {
            return this.variantDescription;
        };
    
        /**
         * Setter for VariantDescription
         * 
         * @param {string} value 
         */
        ComicModel.prototype.setVariantDescription = function (value) {
            this.variantDescription = value;
        };
    
        /**
         * A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).
         *
         * @return {array}
         */
        ComicModel.prototype.getVariants = function () {
            return this.variants;
        };
    
        /**
         * Setter for Variants
         * 
         * @param {array} value 
         */
        ComicModel.prototype.setVariants = function (value) {
            this.variants = value;
        };
    
        return ComicModel;
    }

}(angular));
