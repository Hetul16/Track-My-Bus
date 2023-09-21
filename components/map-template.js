const mapTemplate = `

<!DOCTYPE html>
<html>
<head>
	
	<title>Quick Start - Leaflet</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>


	
</head>
<body style="padding: 0; margin: 0">



<div id="mapid" style="width: 100%; height: 100vh;"></div>
<script>

	var mymap = L.map('mapid').setView([21.1702, 72.8311], 5);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; OpenStreetMap contributors, ',
		id: 'mapbox/streets-v11'    
	}).addTo(mymap);

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

</script>



</body>
</html>

`

export default mapTemplate;



// -----------------------------------------------------------------------------------------------------------------------------
//    TOmTOM


// / import MapView, { Marker } from 'react-native-maps';
// import MapView from 'react-native-maps';
// import { TomtomMap, Marker } from '@tomtom-international/web-sdk-maps';
// import { TomtomMap, Marker } from '@tomtom-international/web-sdk-maps'; // Import both TomtomMap and Marker


  // let webRef = undefined;

  // let [mapCenter,setMapCenter] = useState('-121.913, 37.361');

  // const onButtonPress = () => {
  //   const [lng, lat] = mapCenter.split(",");
  
  //   webRef.injectJavaScript(`
  //     map.setCenter([
  //       ${parseFloat(lng)},
  //       ${parseFloat(lat)}
  //     ])
  //   `);
  // };
  
  // const handleMapEvent = (event) => {
  //   setMapCenter(event.nativeEvent.data);
  // };
  

  // const apiKey = 'n6vnCiHrwlrbanxobFFixUX6jSNRGGJu';

  {/* <View style={styles.container}>
            <View style={styles.buttons}>
              <TextInput
                style={styles.textInput}
                onChangeText={setMapCenter}
                value={mapCenter}
              />
              <Button
                title="Set Center"
                onPress={onButtonPress}
              />
            </View>

            <WebView
              ref={(r) => (webRef = r)}
              onMessage={handleMapEvent}
              style={styles.map}
              originWhitelist={['*']}
              source={{
                html: mapTemplate, // Use the updated mapTemplate with the marker
              }}
              />
          </View> */}
      {/* Rest of your content */}


	//   --------------------------------------------------------------------------------------------------------------