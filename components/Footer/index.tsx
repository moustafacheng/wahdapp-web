import { useTranslation, Link, i18n } from 'i18n';
import './style.scss';

function Footer() {
  const { t } = useTranslation(['common']);
  return (
    <footer>
      <div className="background-cover">
        <div className="columns">
          <div className="footer-col">
            <span className="label">{t('FOOTER.DOWNLOAD')}</span>
            <Link href="#">
              <a>Google Play</a>
            </Link>
            <Link href="#">
              <a>App Store</a>
            </Link>
          </div>

          <div className="footer-col">
            <span className="label">{t('FOOTER.INFORMATION')}</span>
            <a
              href="https://www.paypal.me/abdullahcheng"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('NAV.DONATE')}
            </a>
            <Link href="/faq">
              <a>{t('NAV.FAQ')}</a>
            </Link>
            <a
              href="https://github.com/wahdapp/Wahdapp"
              target="_blank"
              rel="noreferrer"
            >
              {t('FOOTER.SOURCE_CODE')}
            </a>
          </div>

          <div className="footer-col">
            <span className="label">{t('FOOTER.POLICIES')}</span>
            <Link href="/privacy">
              <a>{t('FOOTER.PRIVACY_POLICY')}</a>
            </Link>
          </div>

          <div className="footer-col down">
            <div className="footer-col">
              <span className="label">{t('FOOTER.LANGUAGES')}</span>
              <a onClick={() => i18n.changeLanguage('en')}>English</a>
              <a onClick={() => i18n.changeLanguage('tw')}>繁體中文</a>
              <a onClick={() => i18n.changeLanguage('cn')}>简体中文</a>
              <a onClick={() => i18n.changeLanguage('id')}>Bahasa Indonesia</a>
            </div>
            <div>
              <div className="trademark">
                All rights reserved. {new Date().getFullYear()}
              </div>
              <div className="trademark bold">Wahdapp</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
