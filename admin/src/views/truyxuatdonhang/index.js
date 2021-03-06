import React, { useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import FormTruyXuatDonHang from './FormTruyXuatDonHang';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();

  useEffect(() => {
  }, []);

  return (
    <Page
      className={classes.root}
      title="Sản Phẩm"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <FormTruyXuatDonHang />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
