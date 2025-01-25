// src/components/dashboard/SummaryCard.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';

interface SummaryCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
    navigateTo: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
    title,
    count,
    icon,
    navigateTo
}) => {
    const navigate = useNavigate();

    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Typography variant='h6' className="text-sm font-medium">{title}</Typography>
                <div className="h-8 w-8 text-muted-foreground">{icon}</div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{count}</div>
                    <Button
                        variant="text"
                        size='small'
                        onClick={() => navigate(navigateTo)}
                        className="flex items-center gap-1"
                    >
                        View All
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SummaryCard;