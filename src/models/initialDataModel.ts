import { Structure } from "entities/structure";
import { Region, User } from "entities/user";
import { TaskItemModel } from "./taskItemModel";

export interface InitialDataModel {
    structures: Structure[];
    inspections: TaskItemModel[];
    regions: Region[];
    users: User[];
    totalInspections: number;
}