import { makeApiCall } from '../../utils';
import { ICoordinates } from '../useWeather/types';
import { GEOCODE_URL } from './constants';

const geoCode = async (
  address: string,
  { latitude, longitude }: ICoordinates,
) =>
  await makeApiCall({
    url: `${GEOCODE_URL}&address=${address}&location=${latitude},${longitude}`,
    method: 'get',
  });

export { geoCode };
