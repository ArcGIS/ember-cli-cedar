import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // bubble scatterplot JSON
    return {
  "type": "scatter",
  "datasets": [
    {
      "url": "https://services1.arcgis.com/bqfNVPUK3HOnCFmA/arcgis/rest/services/Demographics_(Median_Household_Income)/FeatureServer/0",
      "append": true
    }
  ],
  "series": [
    {
      "category": {
        "field": "TotalPop2015",
        "label": "Population"
      },
      "value": {
        "field": "MedianHHIncome2015",
        "label": "Median Median Household Income"
      }
    }
  ]
}
  },
});
