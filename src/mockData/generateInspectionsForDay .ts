import { subDays, formatISO } from 'date-fns';
import { InspectionStatusEnum } from '../enums';

// Function to generate random inspections for a given day
export const generateInspectionsForDay = (day: any) => {
  // Randomly generate between 0 to 10 inspections per day
  const count = Math.floor(Math.random() * 11);
  return Array.from({ length: count }, (_, i) => ({
    id: `${day}-inspection-${i}`,
    structureId: `structure-${Math.floor(Math.random() * 10)}`, // Random structure id from 0 to 9
    inspectionType: ['Routine', 'Special', 'Emergency'][Math.floor(Math.random() * 3)],
    inspectionLevel: ['Level 1', 'Level 2', 'Level 3'][Math.floor(Math.random() * 3)],
    temperature: Math.floor(Math.random() * 35), // Random temperature from 0 to 34
    inspectorName: ['John Doe', 'Jane Smith', 'Alice Johnson'][Math.floor(Math.random() * 3)],
    inspectionDate: formatISO(day, { representation: 'date' }),
    nextInspectionProposedDate: formatISO(subDays(day, -365), { representation: 'date' }), // Next year
    weather: ['Sunny', 'Rainy', 'Cloudy'][Math.floor(Math.random() * 3)],
    engineerName: ['Bob Brown', 'Nancy White', 'Steve Black'][Math.floor(Math.random() * 3)],
    rate: `${Math.floor(Math.random() * 5) + 1}`, // Random rate from 1 to 5
    comment: ['Needs follow-up', 'Satisfactory', 'Requires immediate attention'][Math.floor(Math.random() * 3)],
    maintenanceActions: [],
    conditionRatings: [],
    inspectionStatus: [
      InspectionStatusEnum.Completed,
      InspectionStatusEnum.ToDo,
      InspectionStatusEnum.InProgress,
      InspectionStatusEnum.Submitted][Math.floor(Math.random() * 3)]
  }));
};

