import { ILocationResultCoords } from '../../components/autoComplete/types';
import { ICoordinates } from '../useWeather/types';

interface ILocationResultItem {
  address: string;
  location: ILocationResultCoords;
  score?: number;
  attributes?: {
    Addr_type: string;
  };
  extent?: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  };
}

interface IGeoCodeResponse {
  spatialReference: {
    wkid: number;
    latestWkid: number;
  };
  candidates: ILocationResultItem[];
}

interface IAddress {
  title: string;
  coords: ICoordinates;
}

export type { IAddress, IGeoCodeResponse, ILocationResultItem };
