// src/components/structures/StructureTile.tsx
import React from 'react';
import { Card, CardHeader,  CardContent, Button, Typography } from '@mui/material';
import { ChevronRight, MapPin } from 'lucide-react';
import { Structure } from '../../entities/structure';
import { format } from 'date-fns';

interface StructureTileProps {
    structure: Structure;
    onSelect: (structure: Structure) => void;
}

const StructureTile: React.FC<StructureTileProps> = ({ structure, onSelect }) => {
    const lastInspector = structure.inspections?.[0]?.inspectorName;

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <Typography className="text-lg">{structure.name}</Typography>
                        <p className="text-sm text-muted-foreground">{structure.code}</p>
                    </div>
                    <Button
                        variant="text"
                        size="small"
                        onClick={() => onSelect(structure)}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {structure.location.region}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                            <p className="text-muted-foreground">Type</p>
                            <p className="font-medium">{structure.type}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Last Inspection</p>
                            <p className="font-medium">
                                {structure.lastInspectionDate
                                    ? format(new Date(structure.lastInspectionDate), 'MMM d, yyyy')
                                    : 'N/A'}
                            </p>
                        </div>
                    </div>

                    {lastInspector && (
                        <div className="text-sm">
                            <p className="text-muted-foreground">Last Inspector</p>
                            <p className="font-medium">{lastInspector}</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default StructureTile;