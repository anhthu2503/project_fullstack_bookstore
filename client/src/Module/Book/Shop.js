// import React from 'react';
// import { useEffect, useState } from 'react';
// import Header from '../Header/header';
// import Carousel from "../Carousel/carousel";
// import BookList from '../Book/BookList';
// import BookListHot from '../Book/BookListHot';
// import BookListCategory from '../Book/BookListCategory';
// import axios from 'axios';
// // import ProductList from './ProductList';
// const Shop = () => {
//     const [list_item, SetListItem] = useState([]);
//     const [list_item_hot, SetListItemHot] = useState([]);
//     const [list_item_category, SetListItemCategory] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:4000/products')
//             .then((response) => {
//                 console.log(response);
//                 SetListItem(response.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//         axios.get('http://localhost:4000/product_hot/?limit=9')
//         .then((response) => {
//             console.log(response);
//             SetListItemHot(response.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });

//         axios.get('http://localhost:4000/book_category/')
//         .then((response) => {
//             console.log(response);
//             SetListItemCategory(response.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
//     }, []);
//     return (
//         <>
//             <Header />
//             <Carousel />
//             <div className="innerf-pages section">
//                 <div className="fh-container mx-auto">
//                     <div className="row my-lg-5 mb-5">
//                         {/* <!-- grid left --> */}
//                         <div className="side-bar col-lg-3">
//                             {/* <!--preference --> */}
//                             <div className="left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">
//                                     Danh m???c</h3>
//                                 <ul>
//                                     <li>
//                                         <BookListCategory list_item_category={list_item_category} />
//                                     </li>
//                                     {/* <li>
//                                         <input type="checkbox" className="checked" name="cat2" id="cat2" />
//                                         <p className="cat2">V??n ph??ng ph???m</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="cat3" id="cat3" />
//                                         <p className="cat3">Qu?? l??u ni???m</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="cat4" id="cat4" />
//                                         <p className="cat4">English Ebook</p>
//                                     </li> */}

//                                 </ul>
//                             </div>
//                             {/* <!-- // preference --> */}
//                             {/* <div className="search-hotel"> */}
//                                 {/* <h3 className="shopf-sear-headits-sear-head">
//                                     Ti??u ??i???m th????ng hi???u
//                                 </h3> */}
//                                 {/* <form action="#" method="post">
//                                     <input type="search" placeholder="T??m s??ch, t??c gi???, NXB,...." required="" />
//                                     <input type="submit" value="T??m ki???m" />
//                                 </form>
//                             </div> */}
//                             {/* <!-- price range --> */}
//                             {/* <div className="range">
//                                 <h3 className="shopf-sear-headits-sear-head">
//                                     M???c gi??
//                             </h3>
//                                 <ul className="dropdown-menu6">
//                                     <li>
//                                         <div id="slider-range"></div>
//                                         <input type="text" id="amount" />
//                                         style="border: 0;"
//                                     </li>
//                                 </ul>
//                             </div> */}

//                             {/* <!--preference --> */}
//                             {/* <div className="left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">
//                                     <span>C??ng ty</span> ph??t h??nh</h3>
//                                 <ul>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr1" id="arr1" />
//                                         <p className="arr1">ALPHABOOK</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr2" id="arr2" />
//                                         <p className="arr2">NH?? NAM</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr3" id="arr3" />
//                                         <p className="arr3">MCBooks</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr3" id="arr3" />
//                                         <p className="arr3">NXB Tr???</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr3" id="arr3" />
//                                         <p className="arr3">NXB Kim ?????ng</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="arr3" id="arr3" />
//                                         <p className="arr3">Minh Long</p>
//                                     </li>
//                                 </ul>
//                             </div> */}

//                             {/* <!-- discounts --> */}
//                             <div className="left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">T??c gi???</h3>
//                                 <ul>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size1" id="size1" />
//                                         <p className="size1">Nhi???u t??c gi???</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size2" id="size2" />
//                                         <p className="size2">The Windy</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size3" id="size3" />
//                                         <p className="size3">Kim Kh??nh</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size4" id="size4" />
//                                         <p className="size4">Nh??m t??c gi???</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size5" id="size5" />
//                                         <p className="size5">Nguy???n Nh???t ??nh</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size6" id="size6" />
//                                         <p className="size6">Fujiko F Fujio</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="size7" id="size7" />
//                                         <p className="size7">Phan Minh ?????o</p>
//                                     </li>
//                                 </ul>
//                             </div>

//                             {/* <!-- Binding --> */}
//                             {/* <div className="left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">M??u s???c</h3>
//                                 <div className="d-flex">
//                                     <ul>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color1" id="color1" />
//                                             <p className="color1">??en</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color2" id="color2" />
//                                             <p className="color2">Xanh</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color3" id="color3" />
//                                             <p className="color3">?????</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color4" id="color4" />
//                                             <p className="color4">V??ng</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color5" id="color5" />
//                                             <p className="color5">Tr???ng</p>
//                                         </li>
//                                     </ul>
//                                     <ul>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color6" id="color6" />
//                                             <p className="color6">Xanh l??</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color7" id="color7" />
//                                             <p className="color7">Nhi???u m??u</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color8" id="color8" />
//                                             <p className="color8">T??m</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color9" id="color9" />
//                                             <p className="color9">V??ng ??nh kim</p>
//                                         </li>
//                                         <li>
//                                             <input type="checkbox" className="checked" name="color10" id="color10" />
//                                             <p className="color10">Cam</p>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div> */}

//                             {/* <!-- discounts --> */}
//                             <div className="left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">Gi???m gi??</h3>
//                                 <ul>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="dis1" id="dis1" />
//                                         <p className="dis1">5% - 20%</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="dis2" id="dis2" />
//                                         <p className="dis2">20% - 40%</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="dis3" name="dis3" id="dis3" />
//                                         <p className="dis3">40% - 60%</p>
//                                     </li>
//                                     <li>
//                                         <input type="checkbox" className="checked" name="dis4" id="dis4" />
//                                         <p className="dis4">60% or more</p>
//                                     </li>
//                                 </ul>
//                             </div>

//                             {/* <!-- reviews --> */}
//                             <div className="customer-rev left-side">
//                                 <h3 className="shopf-sear-headits-sear-head">????nh gi??</h3>
//                                 <ul>
//                                     <li>
//                                         <a href="#1">
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <span>T??? 5 sao</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#2">
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <span>T??? 4 sao</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#3">
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <span>T??? 3.5 sao</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#4">
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <span>T??? 3.0 sao</span>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="#5">
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star" aria-hidden="true"></i>
//                                             <i className="fa fa-star-half-o" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <i className="fa fa-star-o" aria-hidden="true"></i>
//                                             <span>T??? 2.5 sao</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* <!-- grid right --> */}
//                         <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">
//                             <div>
//                                 <h3 id="chudeskm">S??ch n???i b???t</h3>
//                                 <hr />
//                             </div>

//                             <div className="card-group">
//                                 <BookListHot list_item_hot={list_item_hot} />
//                             </div>
//                              <div>
//                                 <h3 id="chudeskm">T???t c??? s??ch</h3>
//                                 <hr />
//                             </div>


//                             <div className="card-group">
//                                 <BookList list_item={list_item} />
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Shop;


import React, { Component } from 'react';
import Header from '../Header/header';
import Carousel from "../Carousel/carousel";
import BookList from '../Book/BookList';
import BookListHot from '../Book/BookListHot';
import BookListCategory from '../Book/BookListCategory';
import axios from 'axios';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state= {
            products: [],
            product_hot: [],
            products_category: [],
            book_category: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/products/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            // console.log(response);
            this.setState({
                products: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });


        axios.get('http://localhost:4000/product_hot/?limit=9', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            // console.log(response);
            this.setState({
                product_hot: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });

        axios.get('http://localhost:4000/book_category/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            // console.log(response);
            this.setState({
                book_category: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });

        axios.get('http://localhost:4000/book_category/products_category/', {
            'Content-Type': 'application/json',
        })
        .then((response) => {
            console.log(response);
            this.setState({
                products_category: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }

    filterBookByCategory = () => {
        
        const bookCategory = this.state.products_category.filter(book => {
            return book.Loai_sach_truyen.includes(book.ID_sach_truyen)
        })

        this.setState({
            bookCategory
        })
    }

    render() {
        return (
            <>
            <Header />
            <Carousel />
            <div className="innerf-pages section">
                <div className="fh-container mx-auto">
                    <div className="row my-lg-5 mb-5">
                        {/* <!-- grid left --> */}
                        <div className="side-bar col-lg-3">
                            {/* <!--preference --> */}
                            <div className="left-side">
                                <h3 className="shopf-sear-headits-sear-head">
                                    Danh m???c</h3>
                                <ul>
                                    <li>
                                        <BookListCategory list_item_category={this.state.book_category} onClick={this.filterBookByCategory}/>
                                    </li>

                                </ul>
                            </div>

                            {/* <!-- discounts --> */}
                            <div className="left-side">
                                <h3 className="shopf-sear-headits-sear-head">Gi???m gi??</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" name="dis1" id="dis1" />
                                        <p className="dis1">5% - 20%</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="dis2" id="dis2" />
                                        <p className="dis2">20% - 40%</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="dis3" name="dis3" id="dis3" />
                                        <p className="dis3">40% - 60%</p>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" name="dis4" id="dis4" />
                                        <p className="dis4">60% or more</p>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- reviews --> */}
                            <div className="customer-rev left-side">
                                <h3 className="shopf-sear-headits-sear-head">????nh gi??</h3>
                                <ul>
                                    <li>
                                        <a href="#1">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <span>T??? 5 sao</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#2">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>T??? 4 sao</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#3">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>T??? 3.5 sao</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#4">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>T??? 3.0 sao</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#5">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>T??? 2.5 sao</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- grid right --> */}
                        <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">
                            <div>
                                <h3 id="chudeskm">S??ch n???i b???t</h3>
                                <hr />
                            </div>

                            <div className="card-group">
                                <BookListHot list_item_hot={this.state.product_hot} />
                            </div>

                             <div>
                                <h3 id="chudeskm">T???t c??? s??ch</h3>
                                <hr />
                            </div>


                            <div className="card-group">
                                <BookList list_item={this.state.products} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Shop;