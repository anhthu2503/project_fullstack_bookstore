import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Page from 'src/components/Page';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const FormUsersAdd = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState({
    Type: '',
    Ten: '',
    ID_tac_gia: '',
    ID_the_loai: '',
    ID_nha_xuat_ban: '',
    Tom_tat: '',
    Ngay_xuat_ban: '',
    Doc_thu: '',
    Kich_thuoc: '',
    SKU: '',
    Hinh: '',
    So_trang: '',
    Don_gia: '',
    Tinh_trang: '',
    Alias: '',
    Noi_bat: ''
  });

  const [policy, setPolicy] = useState(false);

  const [typeError, setTypeError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    setIsSubmitting(true);
    event.preventDefault();
    console.log(bookInfo);
    axios.post('http://localhost:4000/add_book/', bookInfo)
      .then((response) => {
        console.log(response);
        setTypeError('success');
        setMessageError(' thênm sách  thành công!');
        setTimeout(() => {
          navigate('/app/quan-ly-san-pham', { replace: true });
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setTypeError('error');
        setMessageError(' thêm sách thất bại!');
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleChangePolicy = () => {
    setPolicy(!policy);
  };

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          {typeError}
          {messageError}
          {
            (typeError && messageError) ? <Alert severity={typeError}>{messageError}</Alert> : <></>
          }
          <Formik>
            {({
              errors,
              handleBlur,
              touched
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Thêm sách mới
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.Type && errors.Type)}
                  fullWidth
                  helperText={touched.Type && errors.Type}
                  label="Type"
                  margin="normal"
                  name="Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Type}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Ten && errors.Ten)}
                  fullWidth
                  helperText={touched.Ten && errors.Ten}
                  label="Tên"
                  margin="normal"
                  name="Ten"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Ten}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.ID_tac_gia && errors.ID_tac_gia)}
                  fullWidth
                  helperText={touched.ID_tac_gia && errors.ID_tac_gia}
                  label="ID Tác giả"
                  margin="normal"
                  name="ID_tac_gia"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.ID_tac_gia}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.ID_the_loai && errors.ID_the_loai)}
                  fullWidth
                  helperText={touched.ID_the_loai && errors.ID_the_loai}
                  label="ID Thể loại"
                  margin="normal"
                  name="ID_the_loai"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.ID_the_loai}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.ID_nha_xuat_ban && errors.ID_nha_xuat_ban)}
                  fullWidth
                  helperText={touched.ID_nha_xuat_ban && errors.ID_nha_xuat_ban}
                  label=" ID Nhà xuất bản"
                  margin="normal"
                  name="ID_nha_xuat_ban"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.ID_nha_xuat_ban}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Tom_tat && errors.Tom_tat)}
                  fullWidth
                  helperText={touched.Tom_tat && errors.Tom_tat}
                  label="Tóm tắt"
                  margin="normal"
                  name="Tom_tat"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Tom_tat}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Ngay_xuat_ban && errors.Ngay_xuat_ban)}
                  fullWidth
                  helperText={touched.Ngay_xuat_ban && errors.Ngay_xuat_ban}
                  label="Ngày xuất bản"
                  margin="normal"
                  name="Ngay_xuat_ban"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Ngay_xuat_ban}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Doc_thu && errors.Doc_thu)}
                  fullWidth
                  helperText={touched.Doc_thu && errors.Doc_thu}
                  label="Đọc thử"
                  margin="normal"
                  name="Doc_thu"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Doc_thu}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Kich_thuoc && errors.Kich_thuoc)}
                  fullWidth
                  helperText={touched.Kich_thuoc && errors.Kich_thuoc}
                  label="Kích thước"
                  margin="normal"
                  name="Kich_thuoc"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Kich_thuoc}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.SKU && errors.SKU)}
                  fullWidth
                  helperText={touched.SKU && errors.SKU}
                  label="SKU"
                  margin="normal"
                  name="SKU"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.SKU}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Hinh && errors.Hinh)}
                  fullWidth
                  helperText={touched.Hinh && errors.Hinh}
                  label="Hình"
                  margin="normal"
                  name="Hinh"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Hình}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.So_trang && errors.So_trang)}
                  fullWidth
                  helperText={touched.So_trang && errors.So_trang}
                  label="Số trang"
                  margin="normal"
                  name="So_trang"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.So_trang}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Don_gia && errors.Don_gia)}
                  fullWidth
                  helperText={touched.Don_gia && errors.Don_gia}
                  label="Đơn giá"
                  margin="normal"
                  name="Don_gia"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Don_gia}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Tinh_Trang && errors.Tinh_Trang)}
                  fullWidth
                  helperText={touched.Tinh_Trang && errors.Tinh_trang}
                  label="Tình trạng"
                  margin="normal"
                  name="Tinh_Trang"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Tinh_Trang}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Alias && errors.Alias)}
                  fullWidth
                  helperText={touched.Alias && errors.Alias}
                  label="Alias"
                  margin="normal"
                  name="Alias"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Alias}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Noi_bat && errors.Noi_bat)}
                  fullWidth
                  helperText={touched.Noi_bat && errors.Noi_bat}
                  label="Nổi bật"
                  margin="normal"
                  name="Noi_bat"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={bookInfo.Noi_bat}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={policy}
                    name="policy"
                    onChange={handleChangePolicy}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Thêm sách
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default FormUsersAdd;
