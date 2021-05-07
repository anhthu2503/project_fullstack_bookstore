import React from 'react';

import BookItem from './BookItem';
const BookList = (props) => {
    return (

        <>
            {/* <div className="col-lg-3 col-sm-6 p-0"> */}
                    {
                        props.list_item.map(item_info =>
                            <BookItem item_info={item_info} />
                        )
                    }
            {/* </div> */}



        </>

    );
}

export default BookList;