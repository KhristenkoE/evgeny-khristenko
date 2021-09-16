import Head from 'next/head';
import Image from 'next/image';

import s from '@styles/Home.module.sass';
import Header from '@components/Header';
import Section from '@components/Section';

import me from '@static/img/me.jpg';
import twitter from '@static/img/twitter.svg';
import facebook from '@static/img/facebook.svg';
import instagram from '@static/img/instagram.svg';
import linkedin from '@static/img/linkedin.svg';
import github from '@static/img/github.svg';
import crunchbase from '@static/img/twitter.svg';
import vk from '@static/img/twitter.svg';

const Home = () => {
  return (
    <>
      <Head>
        <meta name="" title="Evgeny Khristenko" />
        <title>Evgeny Khristenko | Full stack developer</title>
      </Head>
      <main>
        <Section containerClassName={s.heroContainer} className={s.hero}>
          <Header />
          <article className={s.heroContent}>
            <div className={s.textContainer}>
              <h1 className={s.title}>Hi! I’m Evgeny Khristenko.</h1>
              <p className={s.description}>A fullstack developer with 3 years of experience in the area.
                My goal is to make the world a better place by creating
                digital products and helping people solve their problems.
              </p>
              <div className={s.socialsBlock}>
                <div className={s.internet}>
                  <h4 className={s.internetTitle}>Me on the internet</h4>
                  <div className={s.socials}>
                    <a href="https://twitter.com/khristenko_e" target="_blank" rel="noreferer" className={s.social}>
											<img src={twitter.src} />
											Twitter
										</a>
                    <a href="https://www.facebook.com/KhristenkoEvgenyy" target="_blank" rel="noreferer" className={s.social}>
											<img src={facebook.src} />
											Facebook
											</a>
                    <a href="https://instagram.com/evgeny_khristenko" target="_blank" rel="noreferer" className={s.social}>
										<img src={instagram.src} />
											Instagram
											</a>
                    <a href="https://linkedin.com/in/evgeny-khristenko" target="_blank" rel="noreferer" className={s.social}>
										<img src={linkedin.src} />
											LinkedIn
											</a>
                    <a href="https://github.com/KhristenkoE" target="_blank" rel="noreferer" className={s.social}>
										<img src={github.src} />
											Github
											</a>
                    <a href="https://crunchbase.com/person/evgeny-khristenko" target="_blank" rel="noreferer" className={s.social}>
										<img src={crunchbase.src} />
											Crunchbase
											</a>
                    <a href="https://vk.com/khristenkoe" target="_blank" rel="noreferer" className={s.social}>
										<img src={vk.src} />
											VK
											</a>
                  </div>
                </div>
                <div className={s.separator}></div>
                <div className={s.mail}>
                  <form className={s.mailForm}>
                    <textarea spellCheck="true" autoCorrect="on" autoComplete="on" className={s.mailMessage} placeholder="Message" />
                    <button className={s.mailButton} type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className={s.imgContainer}>
              <img draggable={false} unselectable="on" className={s.img} src={me.src} />
            </div>
          </article>
          <aside>
            Nav
          </aside>
        </Section>
      </main>
    </>
  );
};

export default Home;
