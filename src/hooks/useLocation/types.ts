import { ILocationResultCoords } from '../../components/autoComplete/types';

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

interface GeoCodeResponse {
  spatialReference: {
    wkid: number;
    latestWkid: number;
  };
  candidates: ILocationResultItem[];
}

export type { ILocationResultItem, GeoCodeResponse };
