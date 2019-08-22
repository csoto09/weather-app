import React from 'react'
import Search from './Search';
import "rbx/index.css";
import { Column } from "rbx";
const Header = () => {
    return (
        <header>
            <Column.Group>
                <Column key={1}>
                    <div className='title'>Weather by Bloc</div>
                </Column>
                <Column key={2} size={2}>
                    <Search />
                </Column>

            </Column.Group>
        </header >
    )
}

export default Header
