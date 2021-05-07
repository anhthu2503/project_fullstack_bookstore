import React from 'react';
import { Link } from 'react-router-dom';
const BookItemCategory = (props) => {
    return (

        <div>
            <a className="nav-link-menu" href="">{props.item_info.Loai_sach_truyen}</a>
        </div>

    );
}

export default BookItemCategory;
