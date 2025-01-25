// src/components/inspections/InspectionList.tsx
import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { InspectionEntity } from '../../entities/inspection';
import { format } from 'date-fns';

interface InspectionListProps {
    inspections: InspectionEntity[];
    onSelectInspection: (inspection: InspectionEntity) => void;
}

const InspectionList: React.FC<InspectionListProps> = ({
    inspections,
    onSelectInspection,
}) => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Structure Name</TableCell>
                        <TableCell>Inspection Type</TableCell>
                        <TableCell>Inspector Name</TableCell>
                        <TableCell>Engineer Name</TableCell>
                        <TableCell>Inspection Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inspections.map((inspection) => (
                        <TableRow key={inspection.id}>
                            <TableCell>{inspection.structureId}</TableCell>
                            <TableCell>{inspection.inspectionType}</TableCell>
                            <TableCell>{inspection.inspectorName}</TableCell>
                            <TableCell>{inspection.engineerName}</TableCell>
                            <TableCell>
                                {format(new Date(inspection.inspectionDate), 'MMM d, yyyy')}
                            </TableCell>
                            <TableCell>
                                <span
                                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${inspection.inspectionStatus === 'Completed'
                                        ? 'bg-green-100 text-green-800'
                                        : inspection.inspectionStatus === 'InProgress'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    {inspection.inspectionStatus}
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={() => onSelectInspection(inspection)}
                                >
                                    View Details
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default InspectionList;