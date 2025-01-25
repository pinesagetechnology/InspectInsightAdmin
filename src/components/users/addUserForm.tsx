import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardActions, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import { getUsersState } from '../../store/users/selectors';
import { Region, User } from '../../entities/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { CREATE_USER } from '../../store/users/types';

const AddUserForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { regions, loading } = useSelector(getUsersState);

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        supervisor: '',
        username: '',
        password: '',
        regionId: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegionChange = (regionId: string) => {
        setFormData((prev) => ({ ...prev, regionId: regionId }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            title: formData.jobTitle,
            regionId: formData.regionId,
            roles: ['user'],
            passwordHash: formData.password, // In a real app, this would be handled securely
            azureAdId: '', // This would be handled by the backend
        };

        dispatch(dispatch({
            type: CREATE_USER,
            payload: userData,
        } as PayloadAction<User>));
        navigate('/users');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader title="Add New User" />
                <CardContent>
                    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Job Title"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Supervisor"
                            name="supervisor"
                            value={formData.supervisor}
                            onChange={handleInputChange}
                            fullWidth
                        />
                        <TextField
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />
                        <FormControl fullWidth>
                            <InputLabel>Region</InputLabel>
                            <Select
                                name="regionId"
                                value={formData.regionId}
                                label="Region"
                                onChange={(event) => handleRegionChange(event.target.value as string)}
                            >
                                {regions.map((region: Region) => (
                                    <MenuItem key={region.regionId} value={region.regionId}>
                                        {region.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button onClick={() => navigate('/users')} variant="outlined">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" disabled={loading}>
                        {loading ? 'Creating...' : 'Create User'}
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};

export default AddUserForm;
