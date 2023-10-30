import axios, {AxiosResponse} from "axios";
import IShop from '../models/IShop'

export async function getShops(): Promise<AxiosResponse<IShop[]>> {
    return axios.get<IShop[]>('/shops.json')
}
