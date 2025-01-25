import { User } from "../entities/user";
import api from "../helper/api"
import mockStructures from '../mockData/get_structure.json';

export const getUsersData = async () => {

    let result = await api.get("api/users");

    return result.data as User[];
}
