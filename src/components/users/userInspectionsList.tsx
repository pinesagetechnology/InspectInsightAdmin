// src/components/users/UserInspectionsList.tsx
import React from 'react';
import { Card, CardHeader, Typography, CardContent, Button } from '@mui/material';
import { InspectionEntity } from '../../entities/inspection';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Eye } from 'lucide-react';

interface UserInspectionsListProps {
    inspections: InspectionEntity[];
}

const UserInspectionsList: React.FC<UserInspectionsListProps> = ({ inspections }) => {
    const navigate = useNavigate();

    if (inspections.length === 0) {
        return (
            <Card>
                <CardHeader>
                    <Typography variant='h6'>Inspections</Typography>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">No inspections found.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <Typography variant='h6'>Inspections</Typography>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {inspections.map((inspection) => (
                        <div
                            key={inspection.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50"
                        >
                            <div className="space-y-1">
                                <p className="font-medium">Structure ID: {inspection.structureId}</p>
                                <p className="text-sm text-muted-foreground">
                                    Type: {inspection.inspectionType}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Date: {format(new Date(inspection.inspectionDate), 'MMM d, yyyy')}
                                </p>
                                <span
                                    className={`inline-block px-2 py-1 text-xs rounded ${inspection.inspectionStatus === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : inspection.inspectionStatus === 'InProgress'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {inspection.inspectionStatus}
                                </span>
                            </div>
                            <Button
                                variant="text"
                                size="small"
                                onClick={() => navigate(`/inspection/${inspection.id}`)}
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                View Report
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default UserInspectionsList;