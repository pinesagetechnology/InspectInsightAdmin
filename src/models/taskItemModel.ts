import { InspectionEntity } from "../entities/inspection";

export interface TaskItemModel extends InspectionEntity {
    structureName: string;
    location: string;
}