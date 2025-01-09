/* eslint-disable max-len */
import React from 'react';

import SetOfWords from './SetOfWords';

import './SettingMode.scss';

export default function SettingMode(){
    return(
        <main className = "SettingMode">
            <h1>English word cards with translation "stngM"</h1>
            <p>Here are sets of English word cards, divided by topic,
                that will help you learn English and memorize new English words.
                Develop your vocabulary by practicing several dozen words a day, dynamically improving your English! "stngM"</p>
            <div className = "SettingMode__container">
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
                <SetOfWords/>
            </div>
        </main>
    );
}
