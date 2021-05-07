// import React from 'react';
// import { Link } from 'react-router-dom';
// import FormSignUpSignIn from '../FormSignUpSignIn/signin';

// import Badge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// const header = () => {
//     const StyledBadge = withStyles((theme) => ({
//         badge: {
//           right: -3,
//           top: 13,
//           border: `2px solid ${theme.palette.background.paper}`,
//           padding: '0 4px',
//         },
//     }))(Badge);

//     return (
//         <>
//             <header>
//                 <div class="container">
//                     <nav class="top_nav d-flex pt-3 pb-1">
//                         <h1 class="agile_btxt">
//                             <a href="./index.html">
//                                 <span class="agile_btxtaas">๖ۣۜ𝓑</span>.𝓢𝓽𝓸𝓻𝓮
//                             </a>
//                         </h1>

//                         <div class="w3ls_right_nav ml-auto d-flex">

//                             <form class="nav-search form-inline my-0" action="#" method="post">
//                                 <input type="text" class="form-control" id="#" placeholder="Tìm sách, tác giả...." />
//                                 <input class="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" value="Search" id="#" />
//                             </form>

//                             <div class="nav-icon d-flex">

//                                 <a class="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
//                                     <i class="far fa-user"></i>
//                                 </a>

//                                 <div class="cart-mainf">
//                                     <div class="hubcart hubcart2 cart cart box_1">
//                                         <form action="#" method="post">
//                                             <input type="hidden" name="cmd" value="_cart" />
//                                             <input type="hidden" name="display" value="1" />
//                                             <Link to={'/cart'}>
//                                                 {/* <button class="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
//                                                     <i class="fas fa-shopping-bag"></i>
//                                                 </button> */}

//                                                 <IconButton aria-label="cart">
//                                                     <StyledBadge badgeContent={0} color="secondary">
//                                                         <ShoppingCartIcon />
//                                                     </StyledBadge>
//                                                 </IconButton>
//                                             </Link>
//                                         </form>
//                                     </div>
//                                 </div>

//                             </div>

//                             <FormSignUpSignIn />

//                             {/* <div class="modal fade" id="myModal_btn" tabindex="-1" role="dialog" aria-labelledby="myModal_btn" aria-hidden="true">
//                 <div class="agilemodal-dialog modal-dialog" role="document">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title">Register Now</h5>
//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">×</span>
//                             </button>
//                         </div>
//                         <div class="modal-body pt-3 pb-5 px-sm-5">
//                             <div class="row">
//                                 <div class="col-md-6 align-self-center">
//                                     <img src="images/p3.png" class="img-fluid" alt="login_image" />
//                                 </div>
//                                 <div class="col-md-6">
//                                     <form action="#" method="post">
//                                         <div class="form-group">
//                                             <label for="recipient-name1" class="col-form-label">Your Name</label>
//                                             <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-name1" required=""/>
//                                         </div>
//                                         <div class="form-group">
//                                             <label for="recipient-email" class="col-form-label">Email</label>
//                                             <input type="email" class="form-control" placeholder=" " name="Email" id="recipient-email" required=""/>
//                                         </div>
//                                         <div class="form-group">
//                                             <label for="password1" class="col-form-label">Password</label>
//                                             <input type="password" class="form-control" placeholder=" " name="Password" id="password1" required=""/>
//                                         </div>
//                                         <div class="form-group">
//                                             <label for="password2" class="col-form-label">Confirm Password</label>
//                                             <input type="password" class="form-control" placeholder=" " name="Confirm Password" id="password2" required=""/>
//                                         </div>
//                                         <div class="sub-w3l">
//                                             <div class="sub-agile">
//                                                 <input type="checkbox" id="brand2" value=""/>
//                                                 <label for="brand2" class="mb-3">
//                                                     <span></span>I Accept to the Terms & Conditions</label>
//                                             </div>
//                                         </div>
//                                         <div class="right-w3l">
//                                             <input type="submit" class="form-control" value="Register"/>
//                                         </div>
//                                     </form>
//                                     <p class="text-center mt-3">Already a member?
//                                         <a href="#" data-toggle="modal" data-target="#exampleModal1" class="text-dark login_btn">
//                                             Login Now</a>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//                         </div>
//                     </nav>

//                     <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
//                         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                             aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul class="navbar-nav mx-auto text-center">
//                                 <li class="nav-item">
//                                     <a class="nav-link  active" href="index.html">HOME
//                                 <span class="sr-only">(current)</span>
//                                     </a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="/products">SÁCH</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="men.html">TRUYỆN</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="about.html">GIỚI THIỆU</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="dangtin.html">ĐĂNG TIN</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="contact.html">LIÊN HỆ</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="sukien.html">SỰ KIỆN</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" href="faq.html">FAQS</a>
//                                 </li>

//                                 {/* <li class="nav-item">
//                                     <a class="nav-link" href="chitiet.html">Chi tiet</a>
//                                 </li> */}
//                             </ul>
//                         </div>
//                     </nav>

//                 </div>
//             </header>

//         </>
//     );
// };

// export default header;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_item: [],
            item_current: {},
            mang_gio_hang: [],
            products: [],
            bookSearched: [],
        }
    }
    componentDidMount() {
        
        axios.get('http://localhost:4000/products/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            console.log(response);
            this.setState({
                products: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });

        const string_mang_gio_hang = localStorage.getItem('gio_hang');
        // console.log(string_mang_gio_hang);

        if (typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null) {
            // console.log(JSON.parse(string_mang_gio_hang));
            this.setState({
                mang_gio_hang: JSON.parse(string_mang_gio_hang)
            });
            window.addEventListener("storage",(function(e){
                const string_mang_gio_hang = localStorage.getItem('gio_hang');
                this.setState({
                    mang_gio_hang: JSON.parse(string_mang_gio_hang)
                });
                // console.log('st update', this.state.mang_gio_hang.length);
             }).bind(this));
        }
    }

    calculateTotalQuantity = () => this.state.mang_gio_hang.length > 0 &&
        this.state.mang_gio_hang.reduce((previousValue, currentValue) => previousValue + currentValue.so_luong, 0)

    handleChangeInput = (e) => {
        //console.log(e.target.value);

        this.setState({
            search: e.target.value
        })
        const bookSearched =  this.state.products.filter(product => {
            // console.log(product.Ten)
            // console.log( e.target.value)
            if (e.target.value.length === 0) {
                return;
            }

            return product.Ten.includes( e.target.value)
           
        }
            )
        this.setState({
            bookSearched
        })
    }

    handleSearchfunction = () => {
        console.log(this.state.search);
    }

    render() {
        return (
            <>
                <div className="container">
                    <nav className="top_nav d-flex pt-3 pb-1">
                        <h1 className="agile_btxt">
                            <a href="./index.html">
                                <span className="agile_btxtaas">๖ۣۜ𝓑</span>.𝓢𝓽𝓸𝓻𝓮
                            </a>
                        </h1>

                        <div className="w3ls_right_nav ml-auto d-flex">
                            <form className="nav-search form-inline my-0" action="#" method="">
                                <input type="text" className="form-control" id="#" placeholder="Bạn cần tìm gì?" value={this.state.search} onChange={this.handleChangeInput} />
                                <input className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" value="Search" id="#" onClick={this.handleSearchfunction}/>
                            </form>

                            <ul className="list-item-book">
                                {
                                   this.state.bookSearched.map((bookSearched => (
                                        <li className="item-book">
                                            <Link to={'/product-detail/' + bookSearched.ID} >
                                                <a className="nav-link" href="" > {bookSearched.Ten} {bookSearched.Don_gia} đ</a>
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        </div>
                       <div className="nav-icon d-flex">
                                <a class="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                                    <i class="far fa-user"></i>
                                </a>

                            <div className="cart-mainf">
                                <div className="hubcart hubcart2 cart cart box_1">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="display" value="1" />
                                        <Link to={'/cart'}>
                                            <IconButton aria-label="cart">
                                                <StyledBadge badgeContent={this.calculateTotalQuantity()} color="secondary">
                                                    <ShoppingCartIcon />
                                                </StyledBadge>
                                            </IconButton>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">HOME
                                    {/* active */}
                                <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/products">SÁCH</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="truyen.html">TRUYỆN</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="about.html">GIỚI THIỆU</a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="dangtin.html">ĐĂNG TIN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">LIÊN HỆ</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="sukien.html">SỰ KIỆN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faq.html">FAQS</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default header;