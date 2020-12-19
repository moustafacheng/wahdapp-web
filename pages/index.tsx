import { Nav, Footer, Meta, Button, Download } from 'components';
import Image from 'next/image';
import { useTranslation, i18n } from 'i18n';
import meta from 'config/metas/home.json';
import { scroller } from 'react-scroll';
import { Users, Globe, Key } from 'react-feather';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import { NextPage } from 'next';
import { PageContext } from 'types';
import { TFunction } from 'next-i18next';
import 'styles/home.scss';

function goto(_target = '', offset = 0): void {
  scroller.scrollTo(_target, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset,
  });
}

const Home: NextPage<Props> = ({ language }) => {
  const { t }: { t: TFunction } = useTranslation(['landing']);

  const lang = i18n.language ? i18n.language : language ? language : 'en';

  return (
    <div id="home">
      <Meta
        title={meta[lang].title}
        locale={meta[lang].locale}
        meta={meta[lang].meta}
        link={meta[lang].link}
      />

      <Nav />
      <div className="top-header">
        <div className="background-cover">
          <div className="container">
            <div>
              <Image
                src="/assets/bg.jpg"
                layout="fill"
                alt="background"
                className="header-bg"
              />
            </div>
            <div className="header-wrapper">
              <div className="header-block">
                <Fade up duration={800} delay={500}>
                  <h1>{t('HEADER.TITLE')}</h1>
                </Fade>
                <Fade up duration={800} delay={1000}>
                  <span className="subheader">{t('HEADER.SUBTITLE')}</span>
                </Fade>
              </div>
            </div>
            <div className="download-btn">
              <Zoom duration={800} delay={1500} center>
                <Button onClick={() => goto('download')}>
                  {t('DOWNLOAD')}
                </Button>
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      <section id="benefits">
        <div className="container">
          <Fade duration={800} delay={500}>
            <h2>{t('BENEFITS.TITLE')}</h2>
          </Fade>
          <Zoom duration={800} delay={1000}>
            <hr />
          </Zoom>
          <div className="cards">
            <Flip left duration={800}>
              <div className="card">
                <Users size={48} color="#6DC7B0" />
                <h4>{t('BENEFITS.LIST.0.TITLE')}</h4>
                <p>{t('BENEFITS.LIST.0.DESC')}</p>
              </div>
            </Flip>
            <Flip left duration={800} delay={300}>
              <div className="card">
                <Globe size={48} color="#6DC7B0" />
                <h4>{t('BENEFITS.LIST.1.TITLE')}</h4>
                <p>{t('BENEFITS.LIST.1.DESC')}</p>
              </div>
            </Flip>
            <Flip left duration={800} delay={600}>
              <div className="card">
                <Key size={48} color="#6DC7B0" />
                <h4>{t('BENEFITS.LIST.2.TITLE')}</h4>
                <p>{t('BENEFITS.LIST.2.DESC')}</p>
              </div>
            </Flip>
          </div>
        </div>
      </section>

      <section id="content">
        <div className="container">
          <div className="section">
            <div className="text-content full">
              <Fade duration={800} delay={600}>
                <h2>{t('EXPLORE.TITLE')}</h2>
              </Fade>
              <Zoom duration={800} delay={900}>
                <hr />
              </Zoom>
            </div>
          </div>

          <div className="section reverse">
            <Fade up duration={800} delay={600}>
              <div className="row-img">
                <Image
                  src="/assets/search.svg"
                  alt="search"
                  width={475}
                  height={475}
                  className="section-img"
                />
              </div>
            </Fade>
            <Fade up duration={800} delay={600}>
              <div className="text-content">
                <h3>{t('EXPLORE.LIST.0.TITLE')}</h3>
                <span className="subheader">{t('EXPLORE.LIST.0.DESC')}</span>
              </div>
            </Fade>
          </div>

          <div className="section row">
            <Fade up duration={800} delay={600}>
              <div className="text-content">
                <h3>{t('EXPLORE.LIST.1.TITLE')}</h3>
                <span className="subheader">{t('EXPLORE.LIST.1.DESC')}</span>
              </div>
            </Fade>
            <Fade up duration={800} delay={600}>
              <div className="row-img">
                <Image
                  src="/assets/dayoff.svg"
                  alt="dayoff"
                  width={475}
                  height={475}
                  className="section-img"
                />
              </div>
            </Fade>
          </div>

          <div className="section reverse">
            <Fade up duration={800} delay={600}>
              <div className="row-img">
                <Image
                  src="/assets/home.svg"
                  alt="home"
                  width={475}
                  height={475}
                  className="section-img"
                />
              </div>
            </Fade>
            <Fade up duration={800} delay={600}>
              <div className="text-content">
                <h3>{t('EXPLORE.LIST.2.TITLE')}</h3>
                <span className="subheader">{t('EXPLORE.LIST.2.DESC')}</span>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <Download />

      <Footer lang={lang} />
    </div>
  );
};

type Props = {
  namespacesRequired: string[];
  language: string;
};

Home.getInitialProps = ({ req }: PageContext) => {
  return {
    namespacesRequired: ['landing', 'common'],
    language: req ? req.language : i18n.language ? i18n.language : 'en',
  };
};

export default Home;
