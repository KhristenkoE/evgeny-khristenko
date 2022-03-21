export interface TranslationSection {
	[key: string]: string;
}

export type Translations = {
	meta: TranslationSection;
	hero: TranslationSection;
	footer: TranslationSection;
}
