import { Model } from "../models/model";
import api from "../helper/api"
import mockStructures from '../mockData/get_structure.json';

export const getModelsData = async () => {

    let result = await api.get("api/models");

    return result.data as Model[];
}
