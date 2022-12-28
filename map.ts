// function defaultBaselayers() {
//     function attributionExpand(attribution) {
//         var parts = attribution.split('&mdash;', 2);
//         if (parts.length == 1) {
//             return attribution;
//         } else {
//             return parts[0] + '<a onclick="$(this).next().show(); $(this).remove()" href="#teramap">&hellip;</a> <span style="display:none;">' + parts[1] + '</span>';
//         }
//     }
//     var satelliteUrl = '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
//     var satelliteAttribution = attributionExpand('Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community');

//     return {
//         'Topo': L.tileLayer('//server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
//             attribution: attributionExpand('Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community')
//         }),
//         'OpenTopo': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//             maxZoom: 17,
//             attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//         }),
//         'Streets': L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 19,
//             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         }),
//         'Hybrid': L.layerGroup([
//             L.tileLayer(satelliteUrl, {attribution: satelliteAttribution}),
//             L.tileLayer('//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'),
//             L.tileLayer('//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'),
//         ]),
//         'Streets (beta)': L.esri.Vector.vectorBasemapLayer('OSM:Standard', {
//             apikey: 'AAPK259e4716c4fc46a69c619cb6ae91e41fvQHmf63_uACblKpjxxNoDlyz8QXo-uRdt9-dhedU_66gd1nhDH9333MrABIPSNbx'
//         }),
//         'Satellite': L.tileLayer(satelliteUrl, {attribution: satelliteAttribution})
//     };
// }
// if (!window.baselayers) {
//     window.baselayers = defaultBaselayers();
// } else if (typeof window.baselayers == 'function') {
//     window.baselayers = window.baselayers(L);
// }