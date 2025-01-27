import { RoutesValueEnum } from "./enums";
import {
    Home,
    LayoutGrid,
    Users,
    FileText,
} from "lucide-react";

export const SYSTEM_AVAILABILITY_KEY = "Healthy";
// Navigation items

export const mainNavItems = [
    { text: 'Dashboard', icon: <Home size={20} />, path: `${RoutesValueEnum.dashboard}` },
    { text: 'Structure Management', icon: <LayoutGrid size={20} />, path: `${RoutesValueEnum.structures}`},
    { text: 'Users Management', icon: <Users size={20} />, path: `${RoutesValueEnum.users}` },
    { text: 'Reports', icon: <FileText size={20} />, path: `${RoutesValueEnum.report}` },
];