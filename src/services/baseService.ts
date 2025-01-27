import { Regions } from "../mockData";
import { mockAuthResult, mockUser, mockStructures, mockInspectionData } from '../mockData';

// Simulated API calls
export const simulateLogin = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockAuthResult;
};

export const fetchUserProfile = async (userId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUser;
};

export const fetchStructures = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockStructures;
};

export const fetchInspections = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockInspectionData;
};

export const getRegionsData = async () => {
    return Regions;
}

export const fetchUsers = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [mockUser]; // In a real app, this would return multiple users
};