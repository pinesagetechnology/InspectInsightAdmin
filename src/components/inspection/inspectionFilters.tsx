import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, CardContent, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Popover, Box
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider, DateRangePicker, DateRange } from '@mui/x-date-pickers';
import { CalendarToday, Close } from '@mui/icons-material';
import { format } from 'date-fns';
import { InspectionEntity } from '../../entities/inspection';
import _ from 'lodash';
import { getUsersState } from '../../store/users/selectors';

interface InspectionFiltersProps {
    inspections: InspectionEntity[];
    filters: {
        structureName?: string;
        inspectionType?: string;
        inspectorName?: string;
        dateRange?: {
            start: Date;
            end: Date;
        };
    };
    onFilterChange: (key: string, value: any) => void;
    onClearFilters: () => void;
}

const InspectionFilters: React.FC<InspectionFiltersProps> = ({
    inspections,
    filters,
    onFilterChange,
    onClearFilters,
}) => {
    const dispatch = useDispatch();
    const { regions, loading } = useSelector(getUsersState);

    // Get unique values for dropdowns
    const inspectionTypes = _.uniq(inspections.map((i) => i.inspectionType));
    const inspectorNames = _.uniq(inspections.map((i) => i.inspectorName));

    // const [dateRange, setDateRange] = React.useState<DateRange<Date>>([filters.dateRange?.start, filters.dateRange?.end]);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    <FormControl fullWidth>
                        <InputLabel>Structure Name</InputLabel>
                        <TextField
                            placeholder="Search by structure..."
                            value={filters.structureName || ''}
                            onChange={(e) => onFilterChange('structureName', e.target.value)}
                            fullWidth
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Inspection Type</InputLabel>
                        <Select
                            value={filters.inspectionType || ''}
                            onChange={(e) => onFilterChange('inspectionType', e.target.value)}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>All Types</em>
                            </MenuItem>
                            {inspectionTypes.map((type) => (
                                <MenuItem key={type} value={type}>{type}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Inspector</InputLabel>
                        <Select
                            value={filters.inspectorName || ''}
                            onChange={(e) => onFilterChange('inspectorName', e.target.value)}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>All Inspectors</em>
                            </MenuItem>
                            {inspectorNames.map((name) => (
                                <MenuItem key={name} value={name}>{name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        {/* <Button onClick={handlePopoverOpen} startIcon={<CalendarToday />}>
                            {dateRange[0] ? (
                                dateRange[1] ? (
                                    `${format(dateRange[0], "MMM dd, yyyy")} - ${format(dateRange[1], "MMM dd, yyyy")}`
                                ) : (
                                    format(dateRange[0], "MMM dd, yyyy")
                                )
                            ) : (
                                "Pick a date range"
                            )}
                        </Button> */}
                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handlePopoverClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateRangePicker
                                    startText="Start date"
                                    endText="End date"
                                    value={dateRange}
                                    onChange={(newValue) => {
                                        setDateRange(newValue);
                                        if (newValue[0] && newValue[1]) {
                                            onFilterChange('dateRange', { start: newValue[0], end: newValue[1] });
                                        }
                                    }}
                                    renderInput={(startProps, endProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} />
                                            <Box sx={{ mx: 2 }}> to </Box>
                                            <TextField {...endProps} />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider> */}
                        </Popover>
                    </FormControl>
                </Box>

                <Button startIcon={<Close />} onClick={onClearFilters} sx={{ mt: 2 }}>
                    Clear Filters
                </Button>
            </CardContent>
        </Card>
    );
};

export default InspectionFilters;
