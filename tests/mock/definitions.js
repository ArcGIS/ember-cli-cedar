export const bar = {
  'type': 'bar',
  'datasets': [{
    'url': 'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
    'name': 'Number_of_SUM',
    'query': {
      'orderByFields': 'Number_of_SUM DESC',
      'groupByFieldsForStatistics': 'Type',
      'outStatistics': [{
        'statisticType': 'sum',
        'onStatisticField': 'Number_of',
        'outStatisticFieldName': 'Number_of_SUM'
      }]
    }
  }],
  'series': [{
    'category': {
      'field': 'Type',
      'label': 'Type'
    },
    'value': {
      'field': 'Number_of_SUM',
      'label': 'Number of Students'
    },
    'source': 'Number_of_SUM'
  }]
};
