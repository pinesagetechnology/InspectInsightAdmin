import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesValueEnum } from "../../enums";

const LoginPage = React.lazy(() => import('../../pages/login/index'));
const DashboardPage = React.lazy(() => import('../../pages/dashboardPage/index'));
const UserManagementPage = React.lazy(() => import('../../pages/userManagement/index'));
const StrucutreManagementPage = React.lazy(() => import('../../pages/modelManagementPage/index'));
const AdminLayout = React.lazy(() => import('../../pages/appLayout'));


export const AppRouter: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path={`/${RoutesValueEnum.login}`} element={<LoginPage />} />
                <Route path={`/`} element={<LoginPage />} />
                <Route path="/" element={<AdminLayout />}>
                    <Route path={`/${RoutesValueEnum.dashboard}`} element={<DashboardPage />} />
                    <Route path={`/${RoutesValueEnum.users}`} element={<UserManagementPage />} />
                    <Route path={`/${RoutesValueEnum.structures}`} element={<StrucutreManagementPage />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}