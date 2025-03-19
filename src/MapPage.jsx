import React, { useEffect, useState } from 'react';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Style, Stroke, Fill } from 'ol/style';
import { Draw, Modify, Select } from 'ol/interaction';

function MapPage() {
  const [map, setMap] = useState(null);
  const [vectorSource, setVectorSource] = useState(null);
  const [drawInteraction, setDrawInteraction] = useState(null);
  const [modifyInteraction, setModifyInteraction] = useState(null);
  const [selectInteraction, setSelectInteraction] = useState(null);
  const [userDetails, setUserDetails] = useState({ firstName: '' });

  // Retrieve user details from localStorage
  useEffect(() => {
    const storedDetails = localStorage.getItem('userDetails');
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails)); // Parse and set user details
    }
  }, []);

  useEffect(() => {
    // Create vector source and layer
    const source = new VectorSource();
    const layer = new VectorLayer({
      source: source,
      style: new Style({
        stroke: new Stroke({
          color: 'red',
          width: 2,
        }),
        fill: new Fill({
          color: 'rgba(255, 0, 0, 0.2)',
        }),
      }),
    });

    // Create map instance
    const mapInstance = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        layer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    // Create interactions
    const draw = new Draw({
      source: source,
      type: 'Polygon',
    });

    const modify = new Modify({
      source: source,
    });

    const select = new Select();

    // Set interactions and vector source in state
    setVectorSource(source);
    setDrawInteraction(draw);
    setModifyInteraction(modify);
    setSelectInteraction(select);

    // Add map instance to state
    setMap(mapInstance);

    return () => {
      mapInstance.setTarget(null); // Cleanup on component unmount
    };
  }, []);

  // Handlers for toggling interactions
  const activateDraw = () => {
    if (map && drawInteraction) {
      map.removeInteraction(modifyInteraction);
      map.removeInteraction(selectInteraction);
      map.addInteraction(drawInteraction);
    }
  };

  const activateEdit = () => {
    if (map && modifyInteraction) {
      map.removeInteraction(drawInteraction);
      map.removeInteraction(selectInteraction);
      map.addInteraction(modifyInteraction);
    }
  };

  const activateDelete = () => {
    if (map && selectInteraction) {
      map.removeInteraction(drawInteraction);
      map.removeInteraction(modifyInteraction);
      map.addInteraction(selectInteraction);

      // Delete selected features on selection
      selectInteraction.getFeatures().on('add', (event) => {
        const selectedFeature = event.target.item(0); // Get the selected feature
        if (selectedFeature) {
          vectorSource.removeFeature(selectedFeature); // Remove the feature from the vector source
          selectInteraction.getFeatures().clear(); // Clear selection
        }
      });
    }
  };

  return (
    <div>
      {/* Display user's name in the header */}
      <h2 style={{ textAlign: 'center' }}>
        {userDetails.firstName ? `Welcome, ${userDetails.firstName}` : 'Welcome'}
      </h2>
      
      <div id="map" style={{ height: '600px', width: '100%' }}></div>
      
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button onClick={activateDraw}>Draw Polygon</button>
        <button onClick={activateEdit}>Edit Polygon</button>
        <button onClick={activateDelete}>Delete Polygon</button>
      </div>
    </div>
  );
}

export default MapPage;
