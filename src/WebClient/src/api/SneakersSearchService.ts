import axios, {AxiosResponse} from "axios";
import {IModel} from "../models/IModel";

export async function getSneakersModels(): Promise<AxiosResponse<IModel[]>> {
    return axios.get<IModel[]>('/sneakersModels.json')
}
