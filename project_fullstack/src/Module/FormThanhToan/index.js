// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Button } from '@material-ui/core';
// import FormReviewCart from '../FormReviewCart';
// import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '100%',
//     },
//   },
// }));

// export default function BasicTextFields() {
//     const [DataForm, setDataForm] = useState({
//         Fullname_nguoi_nhan: '',
//         Sđt_nguoi_nhan: '',
//         Address_nguoi_nhan: '',
//         Email_nguoi_nhan: ''
//     });

//     const [ThongTinGioHang, setThongTinGioHang] = useState([]);

//     const classes = useStyles();

//     const handleSubmitForm = (event) => {
//         event.preventDefault();
//         //console.log('send form');
//         console.log(ThongTinGioHang);

//         var post_data = DataForm;
//         post_data.chi_tiet_don_hang = ThongTinGioHang;

//         axios.post('http://localhost:4000/don_hang/',post_data)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }

//     const handleChangeInput = (event) => {
//         //console.log(event.target.name, event.target.value);
//         setDataForm({
//             ...DataForm,
//             [event.target.name]: event.target.value
//         });
//     }

//     useEffect(() => {
//         var string_mang_gio_hang = localStorage.getItem('gio_hang');
//         // console.log(string_mang_gio_hang);

//         if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
//             // console.log(JSON.parse(string_mang_gio_hang));
//             var list_gio_hang = JSON.parse(string_mang_gio_hang);
//             var list_chi_tiet_don_hang = [];

//             list_gio_hang.forEach((item, index) => {
//                 list_chi_tiet_don_hang[index] = {
//                     Ten: item.Ten,
//                     So_luong: item.so_luong,
//                     Don_gia: item.Don_gia,
//                     Thanh_tien: item.Don_gia * item.so_luong
//                 };
//             })

//             setThongTinGioHang(list_chi_tiet_don_hang);
//         }
//     }, [])

//     return (
//         <div>
//             <FormReviewCart/>
//             <div className="container-fluid">
//                 <div className="bbook-detail-left">
//                     <p className="bbook-info-cart">NHẬP THÔNG TIN NHẬN HÀNG</p>
//                 </div>
//                 </div>
//             <div>
//                 <form noValidate autoComplete="off" onSubmit={handleSubmitForm} className="container-fluid form-info">
//                     <div className={classes.root}>
//                         <TextField id="Fullname_nguoi_nhan" name="Fullname_nguoi_nhan" label="Họ tên" onChange={handleChangeInput} value={DataForm.Fullname_nguoi_nhan} variant="outlined" />
//                     </div>
//                     <div className={classes.root}>
//                         <TextField id="Sđt_nguoi_nhan" name="Sđt_nguoi_nhan" label="Điện thoại" onChange={handleChangeInput} value={DataForm.Sđt_nguoi_nhan} variant="outlined" />
//                     </div>
//                     <div className={classes.root}>
//                         <TextField id="Address_nguoi_nhan" name="Address_nguoi_nhan" label="Địa chỉ" onChange={handleChangeInput} value={DataForm.Address_nguoi_nhan} variant="outlined" />
//                     </div>
//                     <div className={classes.root}>
//                         <TextField id="Email_nguoi_nhan" name="Email_nguoi_nhan" label="Email" onChange={handleChangeInput} value={DataForm.Email_nguoi_nhan} variant="outlined" />
//                     </div>
//                     <div className={classes.root}>
//                         <Button variant="contained" color="primary" type="submit">
//                             Đặt Hàng
//                         </Button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import FormReviewCart from '../FormReviewCart';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function BasicTextFields() {
    const [DataForm, setDataForm] = useState({
        Fullname_nguoi_nhan: '',
        Sđt_nguoi_nhan: '',
        Address_nguoi_nhan: '',
        Email_nguoi_nhan: ''
    });

    const [ThongTinGioHang, setThongTinGioHang] = useState([]);

    const classes = useStyles();

    const handleSubmitForm = (event) => {
        event.preventDefault();
        //console.log('send form');
        console.log(ThongTinGioHang);

        var post_data = DataForm;
        post_data.chi_tiet_don_hang = ThongTinGioHang;

        axios.post('http://localhost:4000/don_hang/',post_data)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleChangeInput = (event) => {
        //console.log(event.target.name, event.target.value);
        setDataForm({
            ...DataForm,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        //console.log(string_mang_gio_hang);

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            //console.log(JSON.parse(string_mang_gio_hang));
            var list_gio_hang = JSON.parse(string_mang_gio_hang);
            var list_chi_tiet_don_hang = [];

            list_gio_hang.forEach((item, index) => {
                list_chi_tiet_don_hang[index] = {
                    Ten: item.Ten,
                    So_luong: item.so_luong,
                    Don_gia: item.Don_gia,
                    Thanh_tien: item.Don_gia * item.so_luong
                };
            })

            setThongTinGioHang(list_chi_tiet_don_hang);
        }
    }, [])

    return (
        <div>
            <FormReviewCart/>
            <div className="container-fluid">
                 <div className="bbook-detail-left">
                     <p className="bbook-info-cart">NHẬP THÔNG TIN NHẬN HÀNG</p>
                 </div>
                 </div>
             <div>
                <form noValidate autoComplete="off" onSubmit={handleSubmitForm} className="container-fluid form-info">
                    <div className={classes.root}>
                        <TextField id="Fullname_nguoi_nhan" name="Fullname_nguoi_nhan" label="Họ tên" onChange={handleChangeInput} value={DataForm.Fullname_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="Sđt_nguoi_nhan" name="Sđt_nguoi_nhan" label="Điện thoại" onChange={handleChangeInput} value={DataForm.Sđt_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="Address_nguoi_nhan" name="Address_nguoi_nhan" label="Địa chỉ" onChange={handleChangeInput} value={DataForm.Address_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <TextField id="Email_nguoi_nhan" name="Email_nguoi_nhan" label="Email" onChange={handleChangeInput} value={DataForm.Email_nguoi_nhan} variant="outlined" />
                    </div>
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" type="submit">
                            Đặt Hàng
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}