import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useStyles from './styles';

const FooterPage: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              About Us
            </Typography>
            <Typography variant="body2">
              Your Company is dedicated to providing high-quality products and services to our customers.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@yourcompany.com
            </Typography>
            <Typography variant="body2">
              Phone: (123) 456-7890
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              Follow Us
            </Typography>
            <Typography variant="body2">
              Connect with us on social media for the latest updates and promotions.
            </Typography>
            {/* Add social media icons or links here */}
          </Grid>
        </Grid>

        <div className={classes.bottomText}>
          <Typography variant="body2" color="textSecondary" align="center">
            &copy; 2023 Your Company. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default FooterPage;
