import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
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

const FormBookEdit = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const param = useParams();
  const [userInfo, setUserInfo] = useState({
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

  const [typeError, setTypeError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    console.log(param);
    axios.get(`http://localhost:4000/product/${param.ID_sach}`)
      .then((reponse) => {
        console.log(reponse);
        setUserInfo(reponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    axios.put(`http://localhost:4000/product/${param.ID_sach}`, userInfo)
      .then((data) => {
        console.log(data);
        setTypeError('success');
        setMessageError('cập nhật thông tin sách thành công!');
        setTimeout(() => {
          navigate('/app/quan-ly-san-pham', { replace: true });
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setTypeError('error');
        setMessageError(' cập nhật thông tin sách thất bại!');
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
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
              isSubmitting,
              touched
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Cập nhật sách
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
                  value={userInfo.Type}
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
                  value={userInfo.Ten}
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
                  value={userInfo.ID_tac_gia}
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
                  value={userInfo.ID_the_loai}
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
                  value={userInfo.ID_nha_xuat_ban}
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
                  value={userInfo.Tom_tat}
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
                  value={userInfo.Ngay_xuat_ban}
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
                  value={userInfo.Doc_thu}
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
                  value={userInfo.Kich_thuoc}
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
                  value={userInfo.SKU}
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
                  value={userInfo.Hình}
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
                  value={userInfo.So_trang}
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
                  value={userInfo.Don_gia}
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
                  value={userInfo.Tinh_Trang}
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
                  value={userInfo.Alias}
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
                  value={userInfo.Noi_bat}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Cập nhật
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

export default FormBookEdit;
