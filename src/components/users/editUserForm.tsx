import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Dialog, DialogTitle, DialogContent, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box
} from '@mui/material';
import { Region, User } from '../../entities/user';
import { getUsersState } from '../../store/users/selectors';
import { PayloadAction } from '@reduxjs/toolkit';

interface EditUserFormProps {
    user: User;
    open: boolean;
    onClose: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, open, onClose }) => {
    const dispatch = useDispatch();
    const { regions, loading } = useSelector(getUsersState);

    const [formData, setFormData] = React.useState({
        name: user.name,
        email: user.email,
        title: user.title,
        regionId: user.regionId,
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
        const updatedUser = {
            ...user,
            ...formData,
        };
        dispatch({
            type: 'UPDATE_USER',
            payload: updatedUser,
        } as PayloadAction<User>);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
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
                            name="title"
                            value={formData.title}
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
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 3 }}>
                        <Button onClick={onClose} variant="outlined">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" disabled={loading}>
                            {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditUserForm;
