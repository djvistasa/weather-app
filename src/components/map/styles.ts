import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledMap = styled(MapView)`
  flex: 1;
`;

const StyledMarker = styled(Marker)``;

export { StyledMap, StyledMarker };
