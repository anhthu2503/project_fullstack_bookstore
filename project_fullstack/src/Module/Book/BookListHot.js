import React from 'react';

import BookItemHot from './BookItemHot';
const BookListHot = (props) => {
    return (

        <>
            {/* <div className="col-lg-3 col-sm-6 p-0"> */}
                    {
                        props.list_item_hot.map(item_info =>
                            <BookItemHot item_info={item_info} />
                        )
                    }
            {/* </div> */}



        </>

    );
}

export default BookListHot;