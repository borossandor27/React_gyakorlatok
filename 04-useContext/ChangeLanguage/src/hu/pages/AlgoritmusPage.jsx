import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './AlgoritmusPage.css';

const AlgoritmusPage = () => {
    const { language } = useContext(LanguageContext);
    // A kiválasztott nyelv szövegei
    const t = translations[language];

    return (
        <div className="content">
            <h2>{t.heading}</h2>
            <p>{t.intro}</p>
            <p>{t.featuresTitle}</p>
            <ul>
                {t.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>
            <p>{t.examples}</p>
        </div>
    );
}

export default AlgoritmusPage;
