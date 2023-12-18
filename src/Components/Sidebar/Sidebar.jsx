import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import {
  SVGDashboardIcon, SVGArrowRight, SVGLogo,
  SVGProductIcon, SVGCustomersIcon, SVGIncomeIcon,
  SVGPromoteIcon, SVGHelpIcon, SVGArrowRightWhite,
  SVGMenu, SVGXMark,
} from '../../Utils/SVGStorage';
import profile from '../../assets/evano.png';

const navItems = [
  { id: '0', Icon: SVGDashboardIcon, label: 'Dashboard', path: '/dashboardReact' },
  { id: '1', Icon: SVGProductIcon, label: 'Product', path: '/dashboardReact/product' },
  { id: '2', Icon: SVGCustomersIcon, label: 'Customers', path: '/dashboardReact/customers' },
  { id: '3', Icon: SVGIncomeIcon, label: 'Income', path: '/dashboardReact/income' },
  { id: '4', Icon: SVGPromoteIcon, label: 'Promote', path: '/dashboardReact/promote' },
  { id: '5', Icon: SVGHelpIcon, label: 'Help', path: '/dashboardReact/help' },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [userData, setUserData] = useState({
    name: 'Evano',
    role: 'Project Manager',
    profileImage: profile,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <>
      <div className="sidebar">
        <div>
          <div className="sidebar__header">
            <div className="sidebar__logo">
              <SVGLogo />
            </div>
            <h1>Dashboard</h1>
            <span>v.01</span>
          </div>
          <div className="sidebar__nav">
            {navItems.map(({ id, Icon, label, path }) => (
              <Link
                key={id}
                id={id}
                onClick={() => setSelectedId(id)}
                className={`sidebar__item ${selectedId === id ? 'selected' : ''}`}
                to={path}
                style={{ color: selectedId === id ? '#fff' : '' }}
              >
                <div className="sidebar__data">
                  <Icon />
                  <h1>{label}</h1>
                </div>
                {label !== 'Dashboard' && (
                  <div className="sidebar__arrow">
                    {selectedId === id ? <SVGArrowRightWhite /> : <SVGArrowRight />}
                  </div>
                )}
              </Link>
            ))}
          </div>
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

      <div className="sidebar-mobile">
        <button className="sidebar-mobile__menu" onClick={toggleMenu}>
          {isMenuOpen ? <SVGXMark /> : <SVGMenu />}
        </button>
        <div className="sidebar-mobile__profile">
          <img src={userData.profileImage} alt="" />
        </div>
        <div className="sidebar-mobile__nav" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          {navItems.map(({ id, label, path }) => (
            <Link
              key={id}
              id={id}
              onClick={() => setSelectedId(id)}
              className={`sidebar-mobile__item ${selectedId === id ? 'selected' : ''}`}
              to={path}
            >
              <div className="sidebar-mobile__data">
                <h1>{label}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
