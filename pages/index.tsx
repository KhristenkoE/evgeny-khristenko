import React, { useContext } from 'react';

import Head from 'next/head';

import translationsContex from 'contexts/Translations';

import Hero from '@components/Hero';
import Footer from '@components/Footer';

import s from '@styles/Home.module.sass';
import { CountryISOCode } from 'constants/languages';

import me from '@static/img/me.jpg';
import CV from '@components/CV';

interface Props {
	localization: CountryISOCode
}

const Home = ({
	localization,
}: Props) => {
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
				<meta property="og:image" content="https://www.evgenykhristenko.com/_next/static/image/static/img/me.18d7e2f07ae758c66e4ac5f56a7bde53.jpg" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site:id" content="@khristenko_e" />
				<meta name="twitter:creator" content="@khristenko_e" />
				<meta name="twitter:title" content={content.meta.title} />
				<meta name="twitter:description" content={content.meta.description} />
				<meta name="twitter:image" content="https://www.evgenykhristenko.com/_next/static/image/static/img/me.18d7e2f07ae758c66e4ac5f56a7bde53.jpg" />
				<meta name="twitter:image:alt" content={content.meta.title} />
				{/* About alternate from google https://developers.google.com/search/docs/advanced/crawling/localized-versions */}
				{Object.values(CountryISOCode).map((code) => <link key={code} rel="alternate" href={`https://${code}.evgenykhristenko.com`} hrefLang={code} />)}
				<link rel="alternate" href="https://evgenykhristenko.com" hrefLang="x-default" />
			</Head>
			<main className={s.main}>
				<Hero content={content.hero} />
				<CV />
				<Footer content={content.footer} />
			</main>
		</>
	) : null;
};

export default Home;
