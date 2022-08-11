import React, { FC } from 'react';
import { HeaderType } from './Header.types';
import  MyHeader from './HeaderSC';
import { HeaderLink } from './HeaderSC';
const Header:FC<HeaderType> = ({headerType}) => {
    return (
        <MyHeader headerType={headerType}>
            <HeaderLink headerType={headerType} href="#">Welcome to My Page</HeaderLink>
            <HeaderLink headerType={headerType} href="#">About Me</HeaderLink>
            <HeaderLink headerType={headerType} href="#">Contact</HeaderLink>
        </MyHeader>
    )
};
export default Header;