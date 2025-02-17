import React, { useState } from 'react';
import { forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import page from '../../../images/page.png';
import './WordCard.scss';

const WordCard = forwardRef(( props, ref ) => {
    const [ translateCheck, setTranslateCheck ] = useState('');
    
    const handleChange = ( event ) => {
        setTranslateCheck( translateCheck? '' : 'display'  );
        props.countWordCheck( event.target );
    };
    
    return(
        <div className = "WordCard" >
            <img src = { page } alt = "Word card in the form of a notebook sheet" />
            <div className = "word">{ props.word }</div>
            <CSSTransition in = { translateCheck } timeout = { 1000 } classNames = "translate-transition">
                {translateCheck? 
                    <div className = "word-translate">{ props.translation } </div>
                    : 
                    <button className = "button-check" onClick = { handleChange } 
                        ref = { ref }>Check</button> }
            </CSSTransition>
        </div>
    );
});

export default WordCard;

WordCard.defaultProps = {
    word: 'Hello',
    translation: 'Привет'
};
