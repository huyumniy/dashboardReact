import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import
{ SVGDashboardIcon, SVGArrowRight, SVGLogo,
  SVGProductIcon, SVGCustomersIcon, SVGIncomeIcon,
  SVGPromoteIcon, SVGHelpIcon, SVGArrowRightWhite } 
from '../../Utils/SVGStorage';
import profile from '../../assets/evano.png'

const navItems = [
  { id: '0', Icon: SVGDashboardIcon, label: 'Dashboard', path: '/' },
  { id: '1', Icon: SVGProductIcon, label: 'Product', path: '/product' },
  { id: '2', Icon: SVGCustomersIcon, label: 'Customers', path: '/customers' },
  { id: '3', Icon: SVGIncomeIcon, label: 'Income', path: '/income' },
  { id: '4', Icon: SVGPromoteIcon, label: 'Promote', path: '/promote' },
  { id: '5', Icon: SVGHelpIcon, label: 'Help', path: '/help' },
];

const Sidebar = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [userData, setUserData] = useState({
    name: 'Evano',
    role: 'Project Manager',
    profileImage: profile
  });
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
        <SVGLogo />
        </div>
        <h1>Dashboard</h1>
        <span>v.01</span>
      </div>
      <div className="sidebar__nav">
        <ul>
          {navItems.map(({ id, Icon, label, path }) => (
            <li key={id} id={id} onClick={() => setSelectedId(id)} className={selectedId === id ? 'sidebar__item selected' : 'sidebar__item'}>
              <div className="sidebar__data">
                <Icon />
                <Link to={path} style={{ color: selectedId === id ? '#fff' : '' }}>{label}</Link>
              </div>
              {label !== "Dashboard" ? 
              <div className="sidebar__arrow">
                {selectedId === id ? <SVGArrowRightWhite/> : <SVGArrowRight/>}
              </div> : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__profile">
          <img src={userData.profileImage} alt="" />
        </div>
        <div className="sidebar__profile-info">
          <h1>{userData.name}</h1>
          <span>{userData.role}</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;