import { Model } from "../models/model";
import api from "../helper/api"
import mockStructures from '../mockData/get_structure.json';

export const getStructuresData = async () => {

    let result = await api.get("api/structures");

    return result.data as Model[];
}
