import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';

import { Card, CustomInput } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { useEffect, useRef, useState } from 'react';

export interface IContactCardProps {
  key: string;
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    setNewName(name);
    setNewEmail(name);
  }, []);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const setNewEmailEvent = (value: string) => {
    setNewEmail(value);
  };

  const setNewNameEvent = (value: string) => {
    setNewName(value);
  };

  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          {edit ? (
            <>
              <CustomInput value={name} onChange={setNewNameEvent} />
              <CustomInput value={email} onChange={setNewEmailEvent} />
            </>
          ) : (
            <>
              <Typography variant="subtitle1" lineHeight="1rem">
                {newName}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {newEmail}
              </Typography>
            </>
          )}
          <p onClick={() => toggleEdit()} style={{ cursor: 'pointer' }}>
            {edit ? 'Save' : 'Edit'}
          </p>
        </Box>
      </Box>
    </Card>
  );
};
