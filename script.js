 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
       
   
      ], function (Map, MapView, FeatureLayer,) {
 
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-122.68427265664134, 45.53420786469426],
          scale: 5000
        })
   
   
 
        var featureLayer = new FeatureLayer({
          url:"https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Buildings/FeatureServer"});
        map.add(featureLayer);
   
   
  var featureLayer = new FeatureLayer({
     url:"https://services3.arcgis.com/8mRVhBBtAu5eqZUu/arcgis/rest/services/PortlandORMajorStreets/FeatureServer"
   });map.add(featureLayer);
        
  var featureLayer = new FeatureLayer({
     url:"https://slustl.maps.arcgis.com/home/item.html?id=da0a4ca070ae4a5ea6f98772b4d3556d"
   });map.add(featureLayer);
   
 
  const popupTrailheads = {
        "title": "location",
        "content": "<b>Place:</b> {Points}<br>" }
   
 var featureLayer = new FeatureLayer({    url:"https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Layer_1/FeatureServer",
outFields: ["Points"],
   popupTemplate: popupTrailheads                                   
   });map.add(featureLayer);
 });
