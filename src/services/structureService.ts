import { Structure, StructureElement } from "../entities/structure";
import api from "../helper/api"

export const getStructureData = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    let result = await api.get("api/Structure");

    return result.data as Structure[];
}

export const updateStructure = async (structure: Structure): Promise<Structure> => {
    const response = await fetch(`api/structure/${structure.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(structure)
    });
    if (!response.ok) throw new Error('Failed to update structure');
    return response.json();
}
