import MenuIcon from '@mui/icons-material/Menu'
import { Box, AppBar, Toolbar, Typography, Button, } from '@mui/material'
import { IconButton } from '@mui/material';

type Props = {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Activities
          </Typography>
          <Button 
            size="large"
            variant='contained'
            color="warning" 
            onClick={openForm}
            >Create activity</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
