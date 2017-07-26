/**
  * MarvelComicsLib
  *
  * This file was automatically generated for ACME Corp. by APIMATIC v2.0 ( https://apimatic.io )
  */

;(function (angular) {
'use strict';
angular.module('MarvelComicsLib')
    .factory('ModelFactory', ['ThumbnailModel',
        'CharacterSummaryModel',
        'EventSummaryModel',
        'TextObjectModel',
        'ComicPriceModel',
        'ComicDateModel',
        'ImageModel',
        'StorySummaryModel',
        'CreatorSummaryModel',
        'UrlModel',
        'ComicSummaryModel',
        'EventListModel',
        'CreatorListModel',
        'CharacterListModel',
        'SeriesListModel',
        'SeriesSummaryModel',
        'StoryListModel',
        'CharacterDataContainerModel',
        'CharacterModel',
        'ComicListModel',
        'EventDataContainerModel',
        'EventModel',
        'EventDataWrapperModel',
        'ComicDataContainerModel',
        'ComicModel',
        'CreatorDataWrapperModel',
        'CreatorDataContainerModel',
        'CreatorModel',
        'StoryDataWrapperModel',
        'StoryDataContainerModel',
        'StoryModel',
        'CharacterDataWrapperModel',
        'ComicDataWrapperModel',
        'SeriesDataWrapperModel',
        'SeriesDataContainerModel',
        'SeriesModel',
        ModelFactory]);

	/**
	 * Factory service to create instances of models and exception classes
	 */
    function ModelFactory(ThumbnailModel,
        CharacterSummaryModel,
        EventSummaryModel,
        TextObjectModel,
        ComicPriceModel,
        ComicDateModel,
        ImageModel,
        StorySummaryModel,
        CreatorSummaryModel,
        UrlModel,
        ComicSummaryModel,
        EventListModel,
        CreatorListModel,
        CharacterListModel,
        SeriesListModel,
        SeriesSummaryModel,
        StoryListModel,
        CharacterDataContainerModel,
        CharacterModel,
        ComicListModel,
        EventDataContainerModel,
        EventModel,
        EventDataWrapperModel,
        ComicDataContainerModel,
        ComicModel,
        CreatorDataWrapperModel,
        CreatorDataContainerModel,
        CreatorModel,
        StoryDataWrapperModel,
        StoryDataContainerModel,
        StoryModel,
        CharacterDataWrapperModel,
        ComicDataWrapperModel,
        SeriesDataWrapperModel,
        SeriesDataContainerModel,
        SeriesModel) {

		var classMap = {
            ThumbnailModel: ThumbnailModel,
            CharacterSummaryModel: CharacterSummaryModel,
            EventSummaryModel: EventSummaryModel,
            TextObjectModel: TextObjectModel,
            ComicPriceModel: ComicPriceModel,
            ComicDateModel: ComicDateModel,
            ImageModel: ImageModel,
            StorySummaryModel: StorySummaryModel,
            CreatorSummaryModel: CreatorSummaryModel,
            UrlModel: UrlModel,
            ComicSummaryModel: ComicSummaryModel,
            EventListModel: EventListModel,
            CreatorListModel: CreatorListModel,
            CharacterListModel: CharacterListModel,
            SeriesListModel: SeriesListModel,
            SeriesSummaryModel: SeriesSummaryModel,
            StoryListModel: StoryListModel,
            CharacterDataContainerModel: CharacterDataContainerModel,
            CharacterModel: CharacterModel,
            ComicListModel: ComicListModel,
            EventDataContainerModel: EventDataContainerModel,
            EventModel: EventModel,
            EventDataWrapperModel: EventDataWrapperModel,
            ComicDataContainerModel: ComicDataContainerModel,
            ComicModel: ComicModel,
            CreatorDataWrapperModel: CreatorDataWrapperModel,
            CreatorDataContainerModel: CreatorDataContainerModel,
            CreatorModel: CreatorModel,
            StoryDataWrapperModel: StoryDataWrapperModel,
            StoryDataContainerModel: StoryDataContainerModel,
            StoryModel: StoryModel,
            CharacterDataWrapperModel: CharacterDataWrapperModel,
            ComicDataWrapperModel: ComicDataWrapperModel,
            SeriesDataWrapperModel: SeriesDataWrapperModel,
            SeriesDataContainerModel: SeriesDataContainerModel,
            SeriesModel: SeriesModel
		};

		return {
		    /**
		     * Creates instance of a model class
		     * @param  modelName  {string}  Name of class to instantiate
		     * @returns  {object} Instance of the model class
		     */
			getInstance: function(modelName) {
        		return new classMap[modelName]();
			}
		};
	}

}(angular));
