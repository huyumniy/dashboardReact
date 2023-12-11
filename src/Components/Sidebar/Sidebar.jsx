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
  const [hoveredId, setHoveredId] = useState(null);

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
            <li key={id} id={id} onMouseEnter={() => setHoveredId(id)} onMouseLeave={() => setHoveredId(null)}>
              <div className="sidebar__items">
                <Icon />
                <a href="#">{label}</a>
              </div>
              <div className="sidebar__arrow">
                {hoveredId === id ? <SVGArrowRightWhite/> : <SVGArrowRight/>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;