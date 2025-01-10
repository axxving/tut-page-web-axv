import React from 'react';
import { Li } from '../header/Li';

export const Div = ({title, first, second, third, fourth, fifth}) => {
    return <div>
    <h3>{title}</h3>
    <ul>
        <Li text={first} />
        <Li text={second} />
        <Li text={third} />
        <Li text={fourth} />
        <Li text={fifth} />
    </ul>
</div>;
};
