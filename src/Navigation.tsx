import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

/** Navigation bar
 *
 *
 *  App -> Navigation
 */
export default function Navigation(){
    return (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Movie Bucket
            </Typography>
            <Stack direction="row" spacing={2} sx={{marginLeft: 'auto'}}>
                <Button color="inherit" component={Link} to="/about">
                My Buckets
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                Account
                </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      );

}