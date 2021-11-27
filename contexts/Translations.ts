import { createContext } from 'react';
import { Translations } from '../interfaces/Translations';

interface TranslationsContext {
	data: Translations | null
}

const translationsContex = createContext<TranslationsContext>({
	data: null,
});

export default translationsContex;
