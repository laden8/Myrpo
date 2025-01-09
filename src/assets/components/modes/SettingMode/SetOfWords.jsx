import React from 'react';

import colors from '../../../images/colors.png';

import ButtonTrain from './ButtonTrain';

import './SetOfWords.scss';


export default function SetOfWords(){
    return(
        <section className = "SetOfWords">
            <ButtonTrain/>
            <img src = { colors } alt = "Flower Card Screensaver" />
            <h3>Colors</h3>
        </section>
    );
}
