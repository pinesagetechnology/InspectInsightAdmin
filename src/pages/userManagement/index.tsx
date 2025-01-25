// src/pages/Users.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import UserCard from '../../components/users/userCard';
import UserInspectionsList from '../../components/users/userInspectionsList';
import { LoadingState } from '../../components/common/loadingState';
import ErrorAlert from '../../components/common/errorAlert';
import EditUserForm from '../../components/users/editUserForm';
import { User } from '../../entities/user';
import { getUsersState } from '../../store/users/selectors';
import { Button } from '@mui/material';
import {
  SELECT_USER,
  FETCH_USER_INSPECTIONS,
} from '../../store/users/types';

const UsersPage: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    users,
    selectedUser,
    userInspections,
    loading,
    error
  } = useSelector(getUsersState);

  const handleUserSelect = (user: User) => {
    dispatch({
      type: SELECT_USER,
      payload: { user },
    });

    dispatch({
      type: FETCH_USER_INSPECTIONS,
      payload: { userId: user.userId },
    });
  };

  if (loading) {
    return (
      <div className="p-6">
        <LoadingState message="Loading users..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <ErrorAlert message={error} />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button onClick={() => navigate('/users/add')}>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users List */}
        <div className="md:col-span-2 space-y-4">
          {users.map((user: User) => (
            <UserCard
              key={user.userId}
              user={user}
              onSelect={handleUserSelect}
            />
          ))}
        </div>

        {/* Inspections List */}
        <div className="md:col-span-1">
          {selectedUser && (
            <UserInspectionsList inspections={userInspections} />
          )}
        </div>
      </div>

      {/* Edit User Form */}
      {selectedUser && (
        <EditUserForm
          user={selectedUser}
          open={!!selectedUser}
          onClose={() => dispatch({
            type: SELECT_USER,
          })}
        />
      )}
    </div>
  );
};

export default UsersPage;