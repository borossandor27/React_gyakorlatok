import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
        <p>© 2026 My Application. {translations[language].footer}</p>
    </footer>
  );
}

export default Footer;
