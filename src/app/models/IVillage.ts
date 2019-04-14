import {IWeather} from './IWeather';
import {ISocialInfo} from './ISocialInfo';

export interface IVillage {
  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
  type: string;
}
