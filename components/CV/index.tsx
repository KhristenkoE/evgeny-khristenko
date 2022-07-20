import Section from "@components/Section";
import Title, { Type } from "@components/Title";
import styles from './CV.module.sass';

const CV = () => {
	return (
		<Section className={styles.section}>
			<a className={styles.titleLink} href="https://eugenekhristenko.notion.site/eugenekhristenko/Evgeny-Khristenko-CV-91ec3bb99911406ea55983703d63a9a9">
				<Title className={styles.title} type={Type.H2}>
					Curriculum vitae
				</Title>
			</a>
		</Section>
	);
};

export default CV;
