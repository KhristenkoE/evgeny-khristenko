import { useEffect, useMemo, useState } from 'react';

import '@styles/globals.sass';
import '@styles/variables.sass';
import '@styles/fonts.sass';

import translationsContex from 'contexts/Translations';

import { CountryISOCode } from 'constants/languages';

import translations from '../data/translations.json';

const App = ({ Component, pageProps }) => {
	const [localization, setLocalization] = useState<CountryISOCode | null>(null);

	const content = useMemo(() => localization ? translations[localization] : null, [translations, localization]);

	useEffect(() => {
		const localizationFromURL = location.host.match(/(.{2,5})\./)?.[1]; // match subdomain, which is actually a language or country code
		const localization = Object.values(CountryISOCode).find((item) => localizationFromURL === item);

		setLocalization(localization ?? CountryISOCode.EN);
	}, []);

	return (
		<translationsContex.Provider value={{ data: content }}>
			<Component {...pageProps} localization={localization} />
		</translationsContex.Provider>
	);
};

export default App;
