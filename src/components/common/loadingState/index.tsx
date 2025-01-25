import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
    message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
    message = 'Loading...'
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    );
};

export const LoadingCard: React.FC<LoadingStateProps> = ({ message }) => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <LoadingState message={message} />
        </div>
    );
};