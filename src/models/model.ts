import { User } from "./user";

export interface Model {
    id: string;
    name: string;
    serialNumber: string;
    status: 'InProgress' | 'Completed';
    dateAssigned: string;
    deadline: string;
    inspector?: User;
    description?: string;
    attachments?: string[];
  }
  