import React from 'react';

import BookItemCategory from './BookItemCategory';
const BookListCategory = (props) => {
    return (

        <>
            {/* <div className="col-lg-3 col-sm-6 p-0"> */}
                    {
                        props.list_item_category.map(item_info =>
                            <BookItemCategory item_info={item_info} />
                        )
                    }
            {/* </div> */}



        </>

    );
}

export default BookListCategory;