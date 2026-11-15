import { useState } from 'react';
import { LanguageContext } from './LanguageContext';

// A Provider tárolja a kiválasztott nyelvet, és minden alatta lévő
// komponens számára elérhetővé teszi a nyelvet és a váltó függvényt.
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('hu');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
