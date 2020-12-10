import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>TERIMA KASIH TELAH MENGISI KUESIONER INI!</h1>
    <p>
      Semoga dengan pengisian kuesioner ini dapat memberikan sumbangsi terhadap
      ilmu pengetahuan dan dunia praktisi perkotaan.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
