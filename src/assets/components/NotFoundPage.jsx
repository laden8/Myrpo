import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';
import cat from '../images/not-found-cat.svg';

export default function NotFoundPage(){
    return(
        <main className = "NotFoundPage">
            <h2 className = "NotFoundPage__title">Страница не найдена</h2>
            <img className = "NotFoundPage__img" src = { cat } alt = "Cat in a box with a sign 404" />
            <p className = "NotFoundPage__question">Вернёмся к 
                <Link to = "/" className = "NotFoundPage__Link">choice of cards</Link>?</p>
        </main>
    );
}
