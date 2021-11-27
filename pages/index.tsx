import React, { useContext } from 'react';

import Head from 'next/head';

import translationsContex from 'contexts/Translations';

import Hero from '@components/Hero';
import Footer from '@components/Footer';

const Home = () => {
	const { data: content } = useContext(translationsContex);

	return content ? (
		<>
			<Head>
				<title>{content.meta.title}</title>
				<meta name="description" content={content.meta.description} />
				<meta name="title" content={content.meta.title} />
				<meta name="url" content="https://evgenykhristenko.com" />
				<meta name="copyright" content="Evgeny khristenko" />
				<meta name="robots" content="index, follow" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://evgenykhristenko.com" />
				<meta property="og:title" content={content.meta.title} />
				<meta property="og:description" content={content.meta.description} />
				<link rel="alternate" href="https://en.evgenykrhistenko.com" hrefLang="en" />
				<link rel="alternate" href="https://ru.evgenykrhistenko.com" hrefLang="ru" />
				<link rel="alternate" href="https://it.evgenykrhistenko.com" hrefLang="it" />
				<link rel="alternate" href="https://fr.evgenykrhistenko.com" hrefLang="fr" />
				<link rel="alternate" href="https://evgenykrhistenko.com" hrefLang="x-default" />
				<link rel="canonical" href="https://evgenykhristenko.com" />
			</Head>
			<main>
				<Hero content={content.hero} />
				<Footer content={content.footer} />
			</main>
		</>
	) : null;
};

export default Home;
