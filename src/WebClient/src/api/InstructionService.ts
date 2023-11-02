import axios, {AxiosResponse} from "axios";
import IInstructionPreview from '../models/IInstructionPreview'
import IInstruction from "../models/IInstruction";

export async function getInstructions(): Promise<AxiosResponse<IInstructionPreview[]>> {
    return axios.get<IInstructionPreview[]>('/instructionsPreview.json')
}

export async function getInstruction(id: string): Promise<AxiosResponse<IInstruction[]>> {
    return axios.get<IInstruction[]>('/FullInstructions.json')
}
