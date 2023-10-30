import axios, {AxiosResponse} from "axios";
import IInstructionPreview from '../models/IInstructionPreview'

export async function getInstructions(): Promise<AxiosResponse<IInstructionPreview[]>> {
    return axios.get<IInstructionPreview[]>('/instructionsPreview.json')
}
