import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import header from './Header.module.css';
import Search from './Search';
export default function Header() {
    
  return (
    <div className={header.header__wrapper}>
        <div className={header.header__logo}>
            <Link to="/" className={header.logo__link}>
                <h2 className={header.title}>
                    Stupping
                    {/* logo는 그냥 컴포넌트로 안 만듦 */}
                </h2>
            </Link>
        </div>
        <div className={header.header__menu}>2</div>
        <div className={header.header__search}>
            <Search />
        </div>
    </div>
  )
}
