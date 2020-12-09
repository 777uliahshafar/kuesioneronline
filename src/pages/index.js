import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { Form, Button, Container } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Halo</h1>
    <p>
      Terima kasih sebelumnya untuk meluangkan waktunya untuk mengisi kuesioner
      ini
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Container>
      <Form>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="cth: Andi Akrab" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control type="text" placeholder="andiakrab@gmail.com" />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Nomor HP (Optional)</Form.Label>
          <Form.Control type="text" placeholder="08135519***" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kirim Kuesioner
        </Button>
      </Form>
    </Container>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
