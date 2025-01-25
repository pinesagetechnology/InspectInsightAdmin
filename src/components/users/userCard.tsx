// src/components/users/UserCard.tsx
import React from 'react';
import { Card, CardHeader, CardContent, Button, Typography } from '@mui/material';
import { User } from '../../entities/user';
import { Edit2, Mail, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface UserCardProps {
    user: User;
    onSelect: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onSelect }) => {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <Typography variant='h6' className="text-lg">{user.name}</Typography>
                        <p className="text-sm text-muted-foreground">{user.title}</p>
                    </div>
                    <Button
                        variant="text"
                        size="small"
                        onClick={() => onSelect(user)}
                    >
                        <Edit2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        {user.email}
                    </div>
                    <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        {user.region.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        Created: {format(new Date(user.createdAt), 'MMM d, yyyy')}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                        {user.roles.map((role) => (
                            <span
                                key={role}
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                            >
                                {role}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserCard;