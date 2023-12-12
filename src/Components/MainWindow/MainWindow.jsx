import React, { useState } from 'react';
import './MainWindow.css';
import { SVGMainWindow, SVGSearch } from '../SVGCompoent/SVGComponent';

const TableRow = ({data, isActive}) => (
  <>
    <div className="main-window__table-row">
      {data.map((item, index) => <p key={index}>{item}</p>)}
      <div className={isActive ? 'main-window__row-status--active' : 'main-window__row-status--inactive'}>
        {isActive ? 'Active' : 'Inactive'}
      </div>
    </div>
    <hr className='main-window__horizontal-line'/>
  </>
)

const MainWindow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const rowsPerPage = 8;
  // I added temporary data for the table instead of fetching it from the server
  const [rows, setRows] = useState([
    {data: ['John Doe', 'Microsoft', '(225) 555-0118', 'jane@microsoft.com', 'United States'], isActive: true},
    {data: ['Floyd Miles', 'Yahoo', '(225) 555-0100', 'floyd@yahoo.com', 'Kiribati'], isActive: false},
    {data: ['Ronald Richards', 'Adobe', '(302) 555-0107', 'ronald@adobe.com', 'Israel'], isActive: false},
    {data: ['Marvin McKinney', 'Tesla', '(252) 555-0126', 'marvin@tesla.com', 'Iran'], isActive: true},
    {data: ['Jerome Bell', 'Google', '(629) 555-0129', 'jerome@google.com', 'Réunion'], isActive: true},
    {data: ['Kathryn Murphy', 'Microsoft', '(406) 555-0120', 'kathryn@microsoft.com', 'Curaçao'], isActive : true},
    {data: ['Jacob Jones', 'Yahoo', '(208) 555-0112', 'jacob@yahoo.com', 'Brazil'], isActive: true}, 
    {data: ['Kristin Watson', 'Facebook', '(704) 555-0127', 'kristin@facebook.com', 'Åland Islands'], isActive: false},
    {data: ['Vladislav Gaidar', 'Example', '(099) 269-2034', 'vladkg53@gmail.com', 'Ukraine'], isActive: true}
  ]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);

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
      <SVGMainWindow>
        <div className='main-window__header'>
          <div className='main-window__title'>
            <h1>All Customers</h1>
            <span>Active members</span>
          </div>
          <div className="main-window__search-bar">
            <SVGSearch />
            <p>Search</p>
          </div>
        </div>
        <div className="main-window__body">
          <div className="main-window__table">
            <div className="main-window__table-row">
              <p>Customer Name</p>
              <p>Company</p>
              <p>Phone Number</p>
              <p>Email</p>
              <p>Country</p>
              <p>Status</p>
            </div>
            <hr className='main-window__horizontal-line'/>
            <div className="main-window__table-body">
              {currentRows.map((row, index) => <TableRow key={index} {...row} />)}
              
            </div>
            <div className='main-window__footer'>
              <div className="main-window__footer-info">Showing data 1 to 8 of  256K entries</div>
              <div className="main-window__footer-buttons">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>{'<'}</button>
              {[...Array(Math.ceil(rows.length / rowsPerPage)).keys()].map(number => (
                <button 
                  key={number + 1} 
                  onClick={() => paginate(number + 1)}
                  className={selectedPage === number + 1 ? 'active' : ''}
                >
                  {number + 1}
                </button>
              ))}
              <button onClick={goToNextPage} disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}>{'>'}</button>
              </div>
              
            </div>
          </div>
        </div>
      </SVGMainWindow>
    </div>
  );
}

export default MainWindow;