import Head from 'next/head';
import Image from 'next/image';

import s from '@styles/Home.module.sass';
import Header from '@components/Header';
import Section from '@components/Section';

import Me from '@static/img/me.jpg';

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
                    <a href="#" className={s.social}>Twitter</a>
                    <a href="#" className={s.social}>Facebook</a>
                    <a href="#" className={s.social}>Instagram</a>
                    <a href="#" className={s.social}>LinkedIn</a>
                    <a href="#" className={s.social}>Github</a>
                    <a href="#" className={s.social}>Crunchbase</a>
                    <a href="#" className={s.social}>VK</a>
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
              <img unselectable="on" className={s.img} src={Me.src} />
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