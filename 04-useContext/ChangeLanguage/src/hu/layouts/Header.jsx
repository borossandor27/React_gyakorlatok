import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './Header.css';

const flags = [
    { code: 'hu', src: '/flags/Flag_of_Hungary.png', alt: 'Magyar' },
    { code: 'en', src: '/flags/Flag_of_the_United_Kingdom.png', alt: 'English' },
    { code: 'de', src: '/flags/Flag_of_Germany.png', alt: 'Deutsch' },
];

const Header = () => {
    // A nyelvet és a váltó függvényt a contextből kapjuk, nem propként
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <header>
            <h1>{translations[language].title}</h1>
            <div className="flags">
                {flags.map((flag) => (
                    <button
                        key={flag.code}
                        type="button"
                        className={flag.code === language ? 'active' : ''}
                        onClick={() => setLanguage(flag.code)}
                    >
                        <img src={flag.src} alt={flag.alt} width="50" />
                    </button>
                ))}
            </div>
        </header>
    );
}

export default Header;
