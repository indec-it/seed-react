import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import maintenanceImg from '@root/public/maintenance.jpg';

function Maintenance() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stack spacing={2} alignItems="center" sx={{boxShadow: 3, borderRadius: 2, backgroundColor: 'white'}} p={5}>
        <Box
          component="img"
          src={maintenanceImg}
          sx={{height: '300px'}}
        />
        <Typography fontWeight="bold" variant="h4">Sistema en mantenimiento</Typography>
        <Typography>Nos encontramos en un breve mantenimiento, por favor vuelva en unos minutos.</Typography>
        <Typography>Muchas gracias.</Typography>
      </Stack>
    </Box>
  );
}

export default Maintenance;
