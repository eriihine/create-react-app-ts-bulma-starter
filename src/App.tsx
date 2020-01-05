import React, { FC, useState } from 'react';
import { IntlProvider } from 'react-intl';
import Main from './components/main/main';
import messagesEn from './translations/en.json';
import messagesFi from './translations/fi.json';
import './app.scss';

interface Messages {
  en: Record<string, string>;
  fi: Record<string, string>;
  [key: string]: Record<string, string>;
}

const App: FC = () => {
  const messages: Messages = {
    en: messagesEn,
    fi: messagesFi,
  };
  const initialLocale: string =
    navigator.language === 'en' ? navigator.language : 'fi';
  const [locale, setLocale] = useState<string>(initialLocale);

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Main locale={locale} setLocale={setLocale} />
      </IntlProvider>
    </>
  );
};

export default App;
