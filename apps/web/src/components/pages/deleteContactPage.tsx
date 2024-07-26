import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const DeleteContactPage: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('id --> ', id);
  }, []);

  return (
    <Box height="100%" display="flex" alignItems="center" marginTop={10}>
      <Typography variant="caption">Do you want to remove ... ?</Typography>
    </Box>
  );
};
