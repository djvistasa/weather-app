const ESRI_API_KEY =
  'AAPK6fe57edc67884bbca01e16dc13d53c75JGL87wzY6kjmuFfLgSmVYreNPZaaRjyWt6_w0gSf55SgGxFpOKzlp8ym0097TVCg';

export const REVERSE_GEOCODE_URL =
  'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=';
export const GEOCODE_URL = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?category=&outFields=*&token=${ESRI_API_KEY}&f=pjson&country=ZA&sourceCountry=ZA&outFields=*&maxLocations=10`;
