import { useDispatch } from 'react-redux';
import { AppRouter } from './navigation/routes';
import React, { Suspense, useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigationManager } from './navigation';

export const MainComponent: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    return (
        <div>
            <Suspense fallback={<React.Fragment></React.Fragment>} >
                <AppRouter />
            </Suspense>
        </div>
    );

}
