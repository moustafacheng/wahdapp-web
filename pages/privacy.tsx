import Head from 'next/head';
import Image from 'next/image';
import { Nav, Footer, Download } from 'components';
import { PageContext } from 'types';
import { i18n } from 'i18n';
import { NextPage } from 'next';
import 'styles/faq.scss';

const Privacy: NextPage<Props> = ({ language }) => {
  const lang = i18n.language ? i18n.language : language ? language : 'en';

  return (
    <div id="faq">
      <Head>
        <title>Wahdapp | Privacy Policy</title>
      </Head>
      <Nav />

      <div className="top-header">
        <div className="background-cover">
          <div className="container">
            <div>
              <Image
                src="/assets/mecca.jpg"
                layout="fill"
                alt="background"
                className="header-bg"
              />
            </div>
            <div className="header-wrapper">
              <div className="header-block">
                <h1>Privacy Policy</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <p>Last updated December 14, 2020</p>
          <p>
            Thank you for choosing to be part of our community at Wahdapp
            (“Company”, “we”, “us”, or “our”). We are committed to protecting
            your personal information and your right to privacy. If you have any
            questions or concerns about our policy, or our practices with
            regards to your personal information, please contact us at
            support@wahd.app.
            <br />
            <br />
            When you visit our mobile application, and use our services, you
            trust us with your personal information. We take your privacy very
            seriously. In this privacy policy, we seek to explain to you in the
            clearest way possible what information we collect, how we use it and
            what rights you have in relation to it. We hope you take some time
            to read through it carefully, as it is important. If there are any
            terms in this privacy policy that you do not agree with, please
            discontinue use of our Apps and our services.
            <br />
            This privacy policy applies to all information collected through our
            mobile application, ("Apps"), and/or any related services, sales,
            marketing or events (we refer to them collectively in this privacy
            policy as the "Services").
            <br />
            Please read this privacy policy carefully as it will help you make
            informed decisions about sharing your personal information with us.
          </p>

          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <p>Personal information you disclose to us</p>
          <p>
            We collect personal information that you voluntarily provide to us
            when registering at the Apps, expressing an interest in obtaining
            information about us or our products and services, when
            participating in activities on the Apps or otherwise contacting us.
            <br />
            <br />
            The personal information that we collect depends on the context of
            your interactions with us and the Apps, the choices you make and the
            products and features you use. The personal information we collect
            can include the following:
            <br />
            <br />
            Publicly Available Personal Information. We collect first name,
            maiden name, last name, and nickname; email addresses; social media;
            and other similar data.
            <br />
            <br />
            Social Media Login Data. We may provide you with the option to
            register using social media account details, like your Facebook,
            Twitter or other social media account. If you choose to register in
            this way, we will collect the Information described in the section
            called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below.
            <br />
            <br />
            All personal information that you provide to us must be true,
            complete and accurate, and you must notify us of any changes to such
            personal information.
          </p>

          <p>Information automatically collected</p>
          <p>
            We automatically collect certain information when you visit, use or
            navigate the Apps. This information does not reveal your specific
            identity (like your name or contact information) but may include
            device and usage information, such as your IP address, browser and
            device characteristics, operating system, language preferences,
            referring URLs, device name, country, location, information about
            how and when you use our Apps and other technical information. This
            information is primarily needed to maintain the security and
            operation of our Apps, and for our internal analytics and reporting
            purposes.
            <br />
            <br />
            Like many businesses, we also collect information through cookies
            and similar technologies.
            <br />
            <br />
            Online Identifiers. We collect device's geolocation; and other
            similar data.
          </p>

          <p>Information collected through our Apps</p>
          <p>
            ➤ Geo-Location Information. We may request access or permission to
            and track location-based information from your mobile device, either
            continuously or while you are using our mobile application, to
            provide location-based services. If you wish to change our access or
            permissions, you may do so in your device's settings.
            <br />
            <br />➤ Push Notifications. We may request to send you push
            notifications regarding your account or the mobile application. If
            you wish to opt-out from receiving these types of communications,
            you may turn them off in your device's settings.
          </p>

          <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
          <p>
            We use personal information collected via our Apps for a variety of
            business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below.
            <br />
            <br />
            We use the information we collect or receive:
            <br />
            <br />➤ To facilitate account creation and logon process. If you
            choose to link your account with us to a third party account (such
            as your Google or Facebook account), we use the information you
            allowed us to collect from those third parties to facilitate account
            creation and logon process for the performance of the contract. See
            the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS" for
            further information.
            <br />
            <br />➤ Request Feedback. We may use your information to request
            feedback and to contact you about your use of our Apps.
            <br />
            <br />➤ To manage user accounts. We may use your information for the
            purposes of managing our account and keeping it in working order.
            <br />
            <br />➤ To respond to user inquiries/offer support to users. We may
            use your information to respond to your inquiries and solve any
            potential issues you might have with the use of our Services.
            <br />
            <br />➤ For other Business Purposes. We may use your information for
            other Business Purposes, such as data analysis, identifying usage
            trends, determining the effectiveness of our promotional campaigns
            and to evaluate and improve our Apps, products, marketing and your
            experience. We may use and store this information in aggregated and
            anonymized form so that it is not associated with individual end
            users and does not include personal information. We will not use
            identifiable personal information without your consent.
          </p>

          <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
          <p>
            We may process or share data based on the following legal basis:
            <br />
            <br />➤ Consent: We may process your data if you have given us
            specific consent to use your personal information in a specific
            purpose.
            <br />
            <br />➤ Legitimate Interests: We may process your data when it is
            reasonably necessary to achieve our legitimate business interests.
            <br />
            <br />➤ Performance of a Contract: Where we have entered into a
            contract with you, we may process your personal information to
            fulfill the terms of our contract.
            <br />
            <br />➤ Legal Obligations: We may disclose your information where we
            are legally required to do so in order to comply with applicable
            law, governmental requests, a judicial proceeding, court order, or
            legal process, such as in response to a court order or a subpoena
            (including in response to public authorities to meet national
            security or law enforcement requirements).
            <br />
            <br />➤ Vital Interests: We may disclose your information where we
            believe it is necessary to investigate, prevent, or take action
            regarding potential violations of our policies, suspected fraud,
            situations involving potential threats to the safety of any person
            and illegal activities, or as evidence in litigation in which we are
            involved.
            <br />
            <br />
            More specifically, we may need to process your data or share your
            personal information in the following situations:
            <br />
            <br />➤ Vendors, Consultants and Other Third-Party Service
            Providers. We may share your data with third party vendors, service
            providers, contractors or agents who perform services for us or on
            our behalf and require access to such information to do that work.
            Examples include: payment processing, data analysis, email delivery,
            hosting services, customer service and marketing efforts. We may
            allow selected third parties to use tracking technology on the Apps,
            which will enable them to collect data about how you interact with
            the Apps over time. This information may be used to, among other
            things, analyze and track data, determine the popularity of certain
            content and better understand online activity. Unless described in
            this Policy, we do not share, sell, rent or trade any of your
            information with third parties for their promotional purposes. We
            have contracts in place with our data processors. This means that
            they cannot do anything with your personal information unless we
            have instructed them to do it. They will not share your personal
            information with any organisation apart from us. They will hold it
            securely and retain it for the period we instruct.
            <br />
            <br />➤ Business Transfers. We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </p>

          <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Policy.
          </p>

          <h2>5. DO WE USE GOOGLE MAPS?</h2>
          <p>
            This website, mobile application, or Facebook application uses
            Google Maps APIs. You may find the Google Maps APIs Terms of Service
            here. To better understand Google’s Privacy Policy, please refer to
            this link.
            <br />
            <br />
            By using our Maps API Implementation, you agree to be bound by
            Google’s Terms of Service.
          </p>

          <h2>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
          <p>
            Our Apps offer you the ability to register and login using your
            third party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile Information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, e-mail address, friends list, profile picture as well as other
            information you choose to make public.
            <br />
            <br />
            We will use the information we receive only for the purposes that
            are described in this privacy policy or that are otherwise made
            clear to you on the Apps. Please note that we do not control, and
            are not responsible for, other uses of your personal information by
            your third party social media provider. We recommend that you review
            their privacy policy to understand how they collect, use and share
            your personal information, and how you can set your privacy
            preferences on their sites and apps.
          </p>

          <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy policy, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting or other legal requirements). No purpose in this
            policy will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
            <br />
            <br />
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize it, or, if
            this is not possible (for example, because your personal information
            has been stored in backup archives), then we will securely store
            your personal information and isolate it from any further processing
            until deletion is possible.
          </p>

          <h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, please also remember that we cannot
            guarantee that the internet itself is 100% secure. Although we will
            do our best to protect your personal information, transmission of
            personal information to and from our Apps is at your own risk. You
            should only access the services within a secure environment.
          </p>

          <h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Apps, you represent that you are at least
            18 or that you are the parent or guardian of such a minor and
            consent to such minor dependent’s use of the Apps. If we learn that
            personal information from users less than 18 years of age has been
            collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we have collected from children under age
            18, please contact us at support@wahd.app.
          </p>

          <h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p>
            In some regions (like the European Economic Area), you have certain
            rights under applicable data protection laws. These may include the
            right (i) to request access and obtain a copy of your personal
            information, (ii) to request rectification or erasure; (iii) to
            restrict the processing of your personal information; and (iv) if
            applicable, to data portability. In certain circumstances, you may
            also have the right to object to the processing of your personal
            information. To make such a request, please use the contact details
            provided below. We will consider and act upon any request in
            accordance with applicable data protection laws.
            <br />
            <br />
            If we are relying on your consent to process your personal
            information, you have the right to withdraw your consent at any
            time. Please note however that this will not affect the lawfulness
            of the processing before its withdrawal.
            <br />
            <br />
            If you are resident in the European Economic Area and you believe we
            are unlawfully processing your personal information, you also have
            the right to complain to your local data protection supervisory
            authority. You can find their contact details here:
            <a
              href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
              target="_blank"
              rel="noreferrer"
              style={{ wordBreak: 'break-all' }}
            >
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
            .
            <br />
            <br />
            If you have questions or comments about your privacy rights, you may
            email us at support@wahd.app.
          </p>

          <p>Account Information</p>
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
            <br />
            <br />
            ➤ Log into your account settings and update your user account.
            <br />
            <br />
            ➤ Contact us using the contact information provided.
            <br />
            <br />
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, some information may be retained in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our Terms of Use and/or comply with legal requirements.
          </p>

          <h2>11. DATA BREACH</h2>
          <p>
            A privacy breach occurs when there is unauthorized access to or
            collection, use, disclosure or disposal of personal information. You
            will be notified about data breaches when Wahdapp believes you are
            likely to be at risk or serious harm. For example, a data breach may
            be likely to result in serious financial harm or harm to your mental
            or physical well-being. In the event that Wahdapp becomes aware of a
            security breach which has resulted or may result in unauthorized
            access, use or disclosure of personal information Wahdapp will
            promptly investigate the matter and notify the applicable
            Supervisory Authority not later than 72 hours after having become
            aware of it, unless the personal data breach is unlikely to result
            in a risk to the rights and freedoms of natural persons.
          </p>

          <h2>12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track (“DNT”) feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. No
            uniform technology standard for recognizing and implementing DNT
            signals has been finalized. As such, we do not currently respond to
            DNT browser signals or any other mechanism that automatically
            communicates your choice not to be tracked online. If a standard for
            online tracking is adopted that we must follow in the future, we
            will inform you about that practice in a revised version of this
            privacy policy.
          </p>

          <h2>13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>
            California Civil Code Section 1798.83, also known as the “Shine The
            Light” law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
            <br />
            <br />
            If you are under 18 years of age, reside in California, and have a
            registered account with the Apps, you have the right to request
            removal of unwanted data that you publicly post on the Apps. To
            request removal of such data, please contact us using the contact
            information provided below, and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Apps, but
            please be aware that the data may not be completely or
            comprehensively removed from our systems.
          </p>

          <h2>14. DO WE MAKE UPDATES TO THIS POLICY?</h2>
          <p>
            We may update this privacy policy from time to time. The updated
            version will be indicated by an updated “Revised” date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy policy, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy policy frequently to be informed of how we are protecting
            your information.
          </p>

          <h2>15. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
          <p>
            If you have questions or comments about this policy, you may email
            us at support@wahd.app.
          </p>

          <h2>
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <p>
            Based on the laws of some countries, you may have the right to
            request access to the personal information we collect from you,
            change that information, or delete it in some circumstances. To
            request to review, update, or delete your personal information,
            please submit a request form by clicking here. We will respond to
            your request within 30 days.
          </p>
        </div>
      </div>

      <Download />

      <Footer lang={lang} />
    </div>
  );
};

type Props = {
  namespacesRequired: string[];
  language: string;
};

Privacy.getInitialProps = ({ req }: PageContext) => {
  return {
    namespacesRequired: ['faq', 'common'],
    language: req ? req.language : i18n.language ? i18n.language : 'en',
  };
};

export default Privacy;
