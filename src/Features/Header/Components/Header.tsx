import React, { FC } from 'react';
import { HeaderType } from './Header.types';
import MyHeader from './HeaderSC';

import {Link} from 'react-scroll'

const Header: FC<HeaderType> = ({ headerType }) => {
  return (
    <>
      <MyHeader headerType={headerType}>
        <div className="links">
          <Link className='link' activeClass="active" smooth spy to="welcome" >
            Welcome to My Page
          </Link>
          <Link className='link' activeClass="active" smooth spy to="about" >
            About Me
          </Link>
          <Link className='link' activeClass="active" smooth spy to="repos">
            My Projects
          </Link>
          <Link className='link' activeClass="active" smooth spy to="about" >
            Contact
          </Link>
        </div>
        <h4>Renas Barış Özkal</h4>
      </MyHeader>
    </>
  );
};
export default Header;
