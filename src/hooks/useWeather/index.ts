import { ICoordinates } from './types';

function useWeather() {
  const getWeather = async (_coordinates: ICoordinates) => false;

  return { getWeather };
}

export default useWeather;
