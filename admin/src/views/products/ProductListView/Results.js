import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, products, ...rest }) => {
  const classes = useStyles();
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [bookIdCurrent, setbookIdCurrent] = useState('');

  const handleSelectAll = (event) => {
    let newSelectedProductIds;

    if (event.target.checked) {
      newSelectedProductIds = products.map((product) => product.ID);
    } else {
      newSelectedProductIds = [];
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedProductIds.indexOf(id);
    let newSelectedProductIds = [];

    if (selectedIndex === -1) {
      newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds, id);
    } else if (selectedIndex === 0) {
      newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds.slice(1));
    } else if (selectedIndex === selectedProductIds.length - 1) {
      newSelectedProductIds = newSelectedProductIds.concat(selectedProductIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProductIds = newSelectedProductIds.concat(
        selectedProductIds.slice(0, selectedIndex),
        selectedProductIds.slice(selectedIndex + 1)
      );
    }

    setSelectedProductIds(newSelectedProductIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (idBook) => {
    setOpen(true);
    setbookIdCurrent(idBook);
  };

  const handleDeleteBook = (idBook) => {
    console.log(idBook);
    handleClickOpen(idBook);
  };

  const handleSendRequestDeleteBook = () => {
    axios.delete(`http://localhost:4000/product/${bookIdCurrent}`, {
    })
      .then((response) => {
        console.log(response);
        rest.handleChangeComponent();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveBookSelected = () => {
    console.log('xoa danh sach book');
    console.log(setSelectedProductIds);

    axios.delete('http://localhost:4000/product', {
      data: setSelectedProductIds
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Button autoFocus onClick={handleRemoveBookSelected} color="secondary">
        Delete Selected
      </Button>
      <PerfectScrollbar>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogActions>
            <Button autoFocus onClick={handleSendRequestDeleteBook} color="secondary">
              OK
            </Button>
            <Button autoFocus onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedProductIds.length === products.length}
                    color="primary"
                    indeterminate={
                      selectedProductIds.length > 0
                      && selectedProductIds.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Tên sách
                </TableCell>
                <TableCell>
                  Hình
                </TableCell>
                <TableCell>
                  Giá
                </TableCell>
                <TableCell>
                  Ngày tạo
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.slice(0, limit).map((product) => (
                <TableRow
                  hover
                  key={product.ID}
                  selected={selectedProductIds.indexOf(product.ID) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProductIds.indexOf(product.ID) !== -1}
                      onChange={(event) => handleSelectOne(event, product.ID)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      {product.Ten}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <img style={{ width: '100px' }} src={`/static/images/sach/${product.Hinh}`} alt={product.Ten} />
                  </TableCell>
                  <TableCell>
                    {product.Don_gia}
                  </TableCell>
                  <TableCell>
                    {moment(product.ngay_tao).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Link to={`/app/quan-ly-san-pham/${product.ID}`}>
                      <Button variant="contained" color="primary">
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button variant="contained" color="secondary" onClick={() => { handleDeleteBook(product.ID); }} style={{ background: '#e23f0e' }}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={products.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array.isRequired
};

export default Results;
