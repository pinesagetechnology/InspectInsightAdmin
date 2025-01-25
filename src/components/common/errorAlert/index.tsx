// src/components/common/ErrorAlert.tsx
import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { AlertCircle } from 'lucide-react';

interface ErrorAlertProps {
    title?: string;
    message: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
    title = 'Error',
    message
}) => {
    return (
        <Alert severity="error">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    );
};

export default ErrorAlert;