import React, { useState } from 'react';
import './MainWindow.scss';
import {  SVGSearch } from '../../Utils/SVGStorage';
import rowsDataExample from '../../data.json'

const keys = ["Customer Name", "Company", "Phone Number", "Email", "Country"];

const TableRow = ({ data, isActive, isMobile }) => (
  <>
  <div className="main-window__table-row">
    {data.map((item, index) => (
      <p key={index}>{isMobile ? <><strong>{keys[index]}:</strong> {item}</> : item}</p>
    ))}
    <p>
      {isMobile ? <strong>Status:</strong> : null}
      <div className={isActive ? 'main-window__row-status active' : 'main-window__row-status inactive'}>
      {isActive ? 'Active' : 'Inactive'}
    
    </div>
    </p>
   
  </div>
  <hr className='main-window__horizontal-line' />
  </>
);

const MainWindow = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const rowsPerPage = 8;
  // I added temporary data for the table instead of fetching it from the server
  const [rows, setRows] = useState(rowsDataExample);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter(row => 
    row.data.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  

  const getPaginationNumbers = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages).keys()].map(n => n + 1);
    } else if (currentPage === 1) {
      return [1, 2, 3];
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    setSelectedPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
    setSelectedPage(prevPage => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setSelectedPage(prevPage => prevPage + 1);
  };

  return (
    <div className='main-window'>
      <h1 className='main-window__hello'>Hello Evano 👋🏼,</h1>
      <div className='main-window__table'>
        <div className='main-window__header'>
          <div className='main-window__title'>
            <h1>All Customers</h1>
            <span>Active members</span>
          </div>
          <div className="main-window__search-bar">
            <SVGSearch />
            <input 
              type="text" 
              placeholder="Search" 
              value={searchTerm} 
              onChange={handleSearchChange} 
            />
          </div>
        </div>
        <div className="main-window__body">
          
          <div className="main-window__table-row">
            <p>Customer Name</p>
            <p>Company</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Country</p>
            <p>Status</p>
          </div>
          <hr className='main-window__horizontal-line--long' />
          <div className="main-window__table-body">
            {currentRows.map((row, index) => <TableRow key={index} {...row} />)}
            
          </div>
        </div>
        <div className="main-window__body-mobile">
          <div className="main-window__table-body">
            {currentRows.map((row, index) => <TableRow key={index} {...row} isMobile={true}/>)}
            
          </div>
        </div>
      
        <div className='main-window__footer'>
          <div className="main-window__footer-info">Showing data 1 to 8 of {rows.length > 1000 ? rows.length + 'K' : rows.length} entries</div>
          <div className="main-window__footer-buttons">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>{'<'}</button>
            {currentPage > 2 && totalPages > 3 && <><button onClick={() => paginate(1)}>1</button><span>...</span></>}
            {getPaginationNumbers().map(number => (
              <button 
                key={number} 
                onClick={() => paginate(number)}
                className={selectedPage === number ? 'active' : ''}
              >
                {number}
              </button>
            ))}
            {currentPage < totalPages - 1 && totalPages > 3 && <><span>...</span><button onClick={() => paginate(totalPages)}>{totalPages}</button></>}
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainWindow;