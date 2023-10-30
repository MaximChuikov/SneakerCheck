import axios, {AxiosResponse} from "axios";
import IInstructionPreview from "../models/IInstructionPreview";

export async function getSneakersModels(): Promise<AxiosResponse<IInstructionPreview[]>> {
    return axios.get<IInstructionPreview[]>('/sneakersModels.json')
}
