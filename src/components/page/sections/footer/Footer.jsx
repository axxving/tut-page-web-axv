import React from 'react';
import { Div } from './Div';

export const Footer = () => {
    return <footer>
    <nav>
        <Div 
        title='Meet to me'
        first='About us'
        second='Vision'
        third='Topics'
        fourth='Mission'
        fifth='Projects'
        />

        <Div
        title='Follow us'
        first='Instagram'
        second='Facebook'
        third='Linkedin'
        fourth='Send email'
        fifth='Youtube channel'
        />

        <Div
        title='Additional'
        first='Help'
        second='Engineering'
        third='The blockers'
        fourth='Developer tools'
        fifth='Best of technologies'
        />

        <Div
        title='Frameworks'
        first='Boobstrap CSS'
        second='Vue js'
        third='React'
        fourth='Django'
        fifth='CSS Tailwind'
        />

        <Div
        title='Lenguages'
        first='JavaScript'
        second='Python'
        third='C++'
        fourth='Css'
        fifth='C#'
        />
    </nav>
 </footer>;
};