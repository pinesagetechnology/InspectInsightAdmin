// src/components/dashboard/AnalysisSection.tsx
import React from 'react';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { InspectionEntity } from '../../../entities/inspection';
import { format } from 'date-fns';

interface AnalysisSectionProps {
  inspections: InspectionEntity[];
}

const MAX_ITEMS = 5;

const InspectionList: React.FC<{
  inspections: InspectionEntity[];
  title: string;
}> = ({ inspections, title }) => {
  const navigate = useNavigate();

  return (
    <Card className="flex-1">
      <CardHeader>
        <Typography variant='h6'>{title}</Typography>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inspections.map((inspection) => (
            <div
              key={inspection.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="space-y-1">
                <p className="font-medium">{inspection.structureId}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(inspection.inspectionDate), 'MMM d, yyyy')}
                </p>
              </div>
              <Button
                size="small"
                onClick={() => navigate(`/inspection/${inspection.id}`)}
              >
                Review
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ inspections }) => {
  const upcomingInspections = React.useMemo(() => {
    return inspections
      .filter((inspection) => inspection.inspectionStatus === 'ToDo')
      .slice(0, MAX_ITEMS);
  }, [inspections]);

  const submittedInspections = React.useMemo(() => {
    return inspections
      .filter((inspection) => inspection.inspectionStatus === 'Completed')
      .slice(0, MAX_ITEMS);
  }, [inspections]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InspectionList
        inspections={upcomingInspections}
        title="Upcoming Tasks"
      />
      <InspectionList
        inspections={submittedInspections}
        title="Submitted Inspections"
      />
    </div>
  );
};

export default AnalysisSection;