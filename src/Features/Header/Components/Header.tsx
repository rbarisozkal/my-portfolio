import React, { FC } from 'react';
import { HeaderType } from './Header.types';
import  MyHeader from './HeaderSC';
import { HeaderLink } from './HeaderSC';
const Header:FC<HeaderType> = ({headerType}) => {
    return (
        <MyHeader headerType={headerType}>
            <div className='links'>
            <HeaderLink headerType={headerType} href="#">Welcome to My Page</HeaderLink>
            <HeaderLink headerType={headerType} href="#">About Me</HeaderLink>
            <HeaderLink headerType={headerType} href="#">My Projects</HeaderLink>
            <HeaderLink headerType={headerType} href="#">Contact</HeaderLink>
            </div>
            <h4>Renas Barış Özkal</h4>
            
        </MyHeader>
    )
};
export default Header;