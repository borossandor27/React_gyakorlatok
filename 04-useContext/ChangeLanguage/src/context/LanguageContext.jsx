import { createContext } from 'react';

// A context alapértelmezett értéke csak akkor érvényes, ha nincs felette Provider.
export const LanguageContext = createContext({
    language: 'hu',
    setLanguage: () => {},
});
