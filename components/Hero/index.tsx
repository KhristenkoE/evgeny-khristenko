import { useState } from 'react';

import s from './Hero.module.sass';

import Header from '@components/Header';
import Section from '@components/Section';

import me from '@static/img/me_look.jpeg';

import twitter from '@static/img/twitter.svg';
import facebook from '@static/img/facebook.svg';
import instagram from '@static/img/instagram.svg';
import linkedin from '@static/img/linkedin.svg';
import github from '@static/img/github.svg';
import crunchbase from '@static/img/twitter.svg';
import vk from '@static/img/vk.svg';
import { TranslationSection } from 'interfaces/Translations';

interface Props {
	content: TranslationSection;
}

const Hero = ({
	content,
}: Props) => {
	const [emailValue, setEmailValue] = useState('');

	return (
		<Section containerClassName={s.heroContainer} className={s.hero}>
			<Header />
			<article className={s.heroContent}>
				<div className={s.textContainer}>
					<h1 className={s.title} dangerouslySetInnerHTML={{ __html: content.title }} />
					<p className={s.description}>
						{content.description}
					</p>
					<div className={s.socialsBlock}>
						<div className={s.internet}>
							<h4 className={s.internetTitle}>{content.socials_title}</h4>
							<div className={s.socials}>
								<a href="https://twitter.com/khristenko_e" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={twitter.src} alt="Twitter" />
									Twitter
								</a>
								<a href="https://www.facebook.com/KhristenkoEvgenyy" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={facebook.src} alt="Facebook" />
									Facebook
								</a>
								<a href="https://instagram.com/evgeniy_khristenko" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={instagram.src} alt="Instagram" />
									Instagram
								</a>
								<a href="https://linkedin.com/in/evgeny-khristenko" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={linkedin.src} alt="LinkedIn" />
									LinkedIn
								</a>
								<a href="https://github.com/KhristenkoE" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={github.src} alt="Github" />
									Github
								</a>
								<a href="https://crunchbase.com/person/evgeny-khristenko" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={crunchbase.src} alt="Crunchbase" />
									Crunchbase
								</a>
								<a href="https://vk.com/khristenkoe" target="_blank" rel="noreferrerr" className={s.social}>
									<img src={vk.src} alt="VK" />
									VK
								</a>
							</div>
						</div>
						<div className={s.separator}></div>
						<div className={s.mail}>
							<form className={s.mailForm}>
								<textarea onChange={({ target: { value } }) => setEmailValue(value)} value={emailValue} spellCheck="true" autoCorrect="on" autoComplete="on" className={s.mailMessage} placeholder="Message" />
								<a className={s.mailButton} href={`mailto:business.ekhristenko@gmail.com?body=${emailValue}`}>Send</a>
							</form>
						</div>
					</div>
				</div>
				<div className={s.imgContainer}>
					<img alt={content.me_img_alt} draggable={false} unselectable="on" className={s.img} src={me.src} />
				</div>
			</article>
			<aside>
				{/* Nav */}
			</aside>
		</Section>
	)
};

export default Hero;
