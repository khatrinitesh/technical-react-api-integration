import React from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../constants/constants';

const Header:React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="container mx-auto">
            <ul>
              {
                navData.map((val,index) => (
                  <li key={index}>
                    <Link to={val.hreflink}>{val.label}</Link>
                  </li>
                ))
              }
            </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
