import React from 'react';
import { View, Image } from 'react-native';
import { MAP } from '../../constants/map';
import { locationStyles } from './LocationStyles';

const MapPreview = ({ location, style, children }) => {
  const loc = location || {}
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
      center=${loc.lat},${loc.lng}
      &zoom=13
      &size=600x300
      &maptype=roadmap
      &markers=color:blue%7Clabel:S%7C${loc.lat},${loc.lng}
      &key=${MAP.API_KEY}`;

  return (
    <View style={{ ...locationStyles.mapPreview, ...style }}>
      {location
        ? <Image style={locationStyles.mapImage} source={{ uri: mapPreviewUrl }} />
        : children
      }
    </View>
  );
}

export default MapPreview;