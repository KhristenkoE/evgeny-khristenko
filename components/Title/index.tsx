import { createElement, CSSProperties, PropsWithChildren } from "react";
import styles from './Title.module.sass';

export enum Type {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
}

interface Props {
	style?: CSSProperties;
	type: Type;
	className?: string;
}

const Title = ({ children, style, type, className }: PropsWithChildren<Props>) => {
	const Heading = createElement(
		type,
		{
			className: `${styles.title} ${styles.title}__${type} ${className}`,
			style,
		},
		children,
	);

	return Heading;
};

export default Title;
