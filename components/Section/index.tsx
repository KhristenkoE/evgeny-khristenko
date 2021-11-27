import { PropsWithChildren } from 'react';

import s from './Section.module.sass';

interface Props {
  className?: string;
  containerClassName?: string;
}

const Section = ({ children, className, containerClassName }: PropsWithChildren<Props>) => {
  return (
    <div className={`${s.container} ${containerClassName}`}>
      <section className={`${s.section} ${className}`}>
        {children}
      </section>
    </div>
  );
};

export default Section;
