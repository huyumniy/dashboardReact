import React, { useState } from 'react';
import './Sidebar.css';
import SVGNull, 
{ SVGDashboardIcon, SVGArrowRight, SVGLogo,
  SVGProductIcon, SVGCustomersIcon, SVGIncomeIcon,
  SVGPromoteIcon, SVGHelpIcon, SVGArrowRightWhite } 
from '../SVGCompoent/SVGComponent';

const navItems = [
  { id: '0', Icon: SVGDashboardIcon, label: 'Dashboard' },
  { id: '1', Icon: SVGProductIcon, label: 'Product' },
  { id: '2', Icon: SVGCustomersIcon, label: 'Customers' },
  { id: '3', Icon: SVGIncomeIcon, label: 'Income' },
  { id: '4', Icon: SVGPromoteIcon, label: 'Promote' },
  { id: '5', Icon: SVGHelpIcon, label: 'Help' },
];

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <SVGLogo />
        <h1>Dashboard</h1>
        <span>v.01</span>
      </div>
      <div className="sidebar__nav">
        <ul>
          {navItems.map(({ id, Icon, label }) => (
            <li key={id} id={id} onClick={() => setSelectedId(id)} className={selectedId === id ? 'sidebar__item--selected' : 'sidebar__item'}>
              <div className="sidebar__data">
                <Icon />
                <a href="#" style={{ color: selectedId === id ? '#fff' : '' }}>{label}</a>
              </div>
              <div className="sidebar__arrow">
                {selectedId === id ? <SVGArrowRightWhite/> : <SVGArrowRight/>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;