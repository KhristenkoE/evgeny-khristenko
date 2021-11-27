import Section from "@components/Section";

import s from './Footer.module.sass';

interface Props {
	content: any;
}

const Footer = ({
	content,
}: Props) => {
	return (
		<footer className={s.footer}>
			<Section className={s.content}>
				<div className={s.infoBlock}>
					<h3 className={s.infoTitle}>{content.mates_block}</h3>
					<ul className={s.list}>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://alexdolbun.com">Alexey Dolgikh</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://nikitakhristenko.com">Nikita Khristenko</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://olianayda.com">Olga Nayda</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://pavelpetrov.xyz/">Pavel Petrov</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://parselian.site">Vyacheslav Vozhdaev</a>
						</li>
						<li>
							<a href="alexandrverevkin.com">Alexandr Verevkin</a>
						</li>
					</ul>
				</div>
				<div className={s.infoBlock}>
					<h3 className={s.infoTitle}>{content.working_on_block}</h3>
					<ul className={`${s.list} ${s.listWorking}`}>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://unicornwitnesses.com">Unicorn Witnesses</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://evgenykhristenko.com">Evgeny Khristenko website</a>
						</li>
						<li>
							<a target="_blank" rel="noreferrerr" href="https://muteit.app">MuteIt</a>
						</li>
					</ul>
				</div>
			</Section>
		</footer>
	);
};

export default Footer;
