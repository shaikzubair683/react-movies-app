import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = (props) => {
    const { currentPage } = props;
    const { pageSize, itemsCount } = props;
    const pagesCount = Math.floor(itemsCount/pageSize);
    const pages = _.range(1,pagesCount+1);
    if(pagesCount ===1){
        return <></>
    }

    return <>
        <nav>
        <ul class="pagination">
            {pages.map(page=>(
                <li key={page} className={page===currentPage?"page-item active":"page-item"}>
                    <a className="page-link"
                    onClick={()=>props.handlePageChange(page)}
                    >{page}</a>
                </li>
            ))}
        </ul>
        </nav>
    </>;
}

Pagination.propTypes ={
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired
};

export default Pagination;