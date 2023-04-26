
  var map = L.map('map').setView([44, 15],7);
  var url = 'http://services.bioportal.hr:80/dzzpnpis/ows?SERVICE=WMS&';
  var url1 = 'http://services.bioportal.hr/inspire/geos1/ps-m/ows?SERVICE=WMS&';
  var url2 = 'http://services.bioportal.hr:80/dzzpnpis/ows?SERVICE=WMS& ';
  var url3 = 'http://services.bioportal.hr:80/dzzpnpis/ows?SERVICE=WMS& ';
  
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 10,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  osm.addTo(map);
  
  var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});  

var wms1=L.tileLayer.betterWms(url, {
  layers: 'zasticeni_fosili',
  transparent: true,
  format: 'image/png'
}).addTo(map);

      
   
      
   var wms2=   L.tileLayer.betterWms(url1, {
        layers: 'PS.ProtectedSitesNationalPark',
        transparent: true,
        format: 'image/png',
	propertyName: "site_name2"
      }).addTo(map);


      var wms3=   L.tileLayer.betterWms(url2, {
        layers: 'ronjenje_tocke',
        transparent: true,
        format: 'image/png'
      }).addTo(map);


      var wms4=   L.tileLayer.betterWms(url3, {
        layers: 'atrakcije_linije',
        transparent: true,
        format: 'image/png'
      }).addTo(map);
var baseMaps = {
  "OpenStreetMap": osm,
  "Satelit": Esri_WorldImagery,
  
};
var overlayMaps = {

"Dinosauri":wms1,
"Nacionalni parkovi":wms2,
"Ronjenje":wms3,
"Atrakcije":wms4
};
L.control.layers(baseMaps, overlayMaps).addTo(map);



