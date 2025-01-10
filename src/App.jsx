import React from 'react';
import { Page } from './components/page/Page';
import { Header } from './components/page/sections/header/Header';
import { Footer } from './components/page/sections/footer/Footer';

export const App = () => {
    return (
        <>
            <Page />
            <Header/>
            <Footer/>
        </>
    );
};
