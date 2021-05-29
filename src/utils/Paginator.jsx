import React, { useState } from 'react';

export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // pagesCount - amount of pages
    // portionSize - the size of the portion, usually 10 pages is displayed
    // portionCount - how many portions of pages in pagesCount
    let portionCount = Math.ceil(pagesCount / props.portionSize)
    // portionNumber - if 4 portion of pages, then the portionNumber is which portion selected, in this case, initial is useState(1)
    let [portionNumber, setPortionNumber] = useState(1)
    // leftPortionNumber - is the first page number of the portionNumber
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1
    // rightPortionNumber - is the last page number of the displayed portion
    let rightPortionNumber = portionNumber * props.portionSize

    return <div className="paginator__pagebar">
        {portionNumber > 1 && 
        <button onClick={() => {setPortionNumber(portionNumber-1)}}>&#10094;</button>}


        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map ((p) => {
                return <div className="span-wrapper" onClick={ (e) => { props.onPageChanged(p); }}><span className={props.currentPage === p && "selectedPage"}
                        key={p}
                        >{p}</span></div>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>&#10095;</button>}

        <button onClick={() => {props.onPageChanged(props.lastPage)}}>&#187;</button>
    </div>
}
