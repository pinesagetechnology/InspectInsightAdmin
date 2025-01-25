import React from 'react';
import { TextField, MenuItem, Card, CardContent, Select, FormControl, InputLabel, Box } from '@mui/material';
import _ from 'lodash';

import { Structure } from '../../entities/structure';

interface StructureFiltersProps {
    structures: Structure[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    filters: {
        type?: string;
        region?: string;
    };
    onFilterChange: (key: string, value: string) => void;
}

const StructureFilters: React.FC<StructureFiltersProps> = ({
    structures,
    searchTerm,
    onSearchChange,
    filters,
    onFilterChange,
}) => {
    // Get unique types and regions for filter options
    const types = _.uniq(structures.map((s) => s.type));
    const regions = _.uniq(structures.map((s) => s.location.region));

    return (
        <Card>
            <CardContent>
                <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {/* Search Input */}
                    <TextField
                        label="Search"
                        variant="outlined"
                        placeholder="Search by name or code..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        fullWidth
                    />

                    {/* Type Filter */}
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            label="Type"
                            value={filters.type || ''}
                            onChange={(e) => onFilterChange('type', e.target.value as string)}
                        >
                            <MenuItem value="">
                                <em>All Types</em>
                            </MenuItem>
                            {types.map((type) => (
                                <MenuItem key={type} value={type}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Region Filter */}
                    <FormControl fullWidth>
                        <InputLabel>Region</InputLabel>
                        <Select
                            label="Region"
                            value={filters.region || ''}
                            onChange={(e) => onFilterChange('region', e.target.value as string)}
                        >
                            <MenuItem value="">
                                <em>All Regions</em>
                            </MenuItem>
                            {regions.map((region) => (
                                <MenuItem key={region} value={region}>
                                    {region}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StructureFilters;
