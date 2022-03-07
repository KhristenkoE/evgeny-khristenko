import Section from "@components/Section";
import Title, { Type } from "@components/Title";
import styles from './CV.module.sass';

const CV = () => {
	return (
		<Section className={styles.section}>
			<a className={styles.titleLink} href="../../static/html/cv.html">
				<Title className={styles.title} type={Type.H2}>
					Curriculum vitae
				</Title>
			</a>
			<iframe src="../../static/html/cv.html" title="CV of Evgeny Khristenko" className={styles.cv} frameBorder="0"></iframe>
		</Section>
	);
};

export default CV;
