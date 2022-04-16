import React, { useEffect, useState } from 'react'
import { Row } from 'antd'
import ReactPaginate from 'react-paginate'

import RoomListItem from './RoomListItem/RoomListItem'

const RoomList = (props) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + props.itemsPerPage;
        setCurrentItems(props.rooms.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(props.rooms.length / props.itemsPerPage));
    }, [itemOffset, props.itemsPerPage, props.rooms]);
    
      // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.rooms.length;
        setItemOffset(newOffset);
    };
    

    return (
        <React.Fragment>
            <Row gutter={16}>
            {
                currentItems &&
                currentItems.map((room) => {
                    return <RoomListItem 
                                key={room._id} 
                                room={room}
                                isAdmin={ props.isAdmin }
                                onEdit={ props.onEdit }
                                onDelete={ props.onDelete }
                                onBook={ props.onBook }
                                cartItems={ props.cartItems } />
                })
            }
            </Row>      

            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'end', marginTop: '40px', marginRight: '40px' }}>
                <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next"
                        previousLabel="Previous"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="custom-pagination pagination"
                        activeClassName="active"
                    />
            </div>

    </React.Fragment>
    )
}

export default RoomList
