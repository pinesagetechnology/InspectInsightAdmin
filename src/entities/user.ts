export interface User {
    userId: string;
    title: string;
    regionId: string;
    azureAdId: string;
    email: string;
    passwordHash: string;
    name: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date | null;
    region: Region;
}

export interface Region {
    regionId: string;
    name: string;
    code: string;
}
