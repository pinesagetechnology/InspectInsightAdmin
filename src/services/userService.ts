import api from "../helper/api"
import mockStructures from '../mockData/get_structure.json';
import { mockInspectionData, Regions } from "../mockData";
import { User } from "../entities/user";

export const getUsersData = async (regionId: string) => {

    let result = await api.get("api/users");

    return result.data as User[];
}

export const getUsersInspectionData = async (userId: string) => {
    return mockInspectionData;
}

export const createUser = async (user: User) => {
    return user;
}

export const updateUser = async (user: User) => {
    return user;
}


