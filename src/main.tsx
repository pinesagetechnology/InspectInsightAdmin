import { useDispatch } from 'react-redux';
import { AppRouter } from './navigation/routes';
import React, { Suspense, useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigationManager } from './navigation';
import * as actions from './store/base/actions';
import { AuthenticationResult } from '@azure/msal-browser';
import { mockAuthResult } from './mockData';

export const MainComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'APP_SETUP',
            payload: mockAuthResult
        } as PayloadAction<AuthenticationResult>);
    }, [])

    return (
        <div>
            <Suspense fallback={<React.Fragment></React.Fragment>} >
                <AppRouter />
            </Suspense>
        </div>
    );

}
