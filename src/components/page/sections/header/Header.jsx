import React from 'react';
import { Li } from './Li';

export const Header = () => {
    return <header >
    <h1>I´m Juan Carlos, CSS jr.Designer</h1>
    <nav>
        <ul>
            <Li text='Index'/>
            <Li text='About me' />
            <Li text='About us' />
            <Li text='Vision' />
            <Li text='Mision' />
        </ul>
    </nav>
 </header>;
};
