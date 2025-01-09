import { User } from "./user";

export interface Model {
    id: string;
    name: string;
    serialNumber: string;
    status: 'Not Assigned' | 'Assigned' | 'In Progress' | 'Completed' | 'Delayed';
    dateAssigned: string;
    deadline: string;
    inspector?: User;
    description?: string;
    attachments?: string[];
  }
  