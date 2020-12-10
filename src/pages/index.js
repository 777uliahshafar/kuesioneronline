import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { Form, Button, Container } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  state = {
    namaLengkap: '',
    alamatEmail: '',
    nomorHp: '',
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Terima kasih ${this.state.namaLengkap}!`);
  };
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Halo</h1>
        <p>
          Terima kasih sebelumnya untuk meluangkan waktunya untuk mengisi
          kuesioner ini
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Container>
          <Form
            name="kuesioner awal"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <p hidden>
              <label>
                I love honeypot : <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="kuesioner awal" />
            <Form.Group controlId="formBasicFullName">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                name="namaLengkap"
                value={this.state.namaLengkap}
                onChange={this.handleInputChange}
                placeholder="cth: Andi Akrab"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="text"
                name="alamatEmail"
                value={this.state.alamatEmail}
                onChange={this.handleInputChange}
                placeholder="andiakrab@gmail.com"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Nomor HP (Optional)</Form.Label>
              <Form.Control
                type="text"
                name="nomorHp"
                value={this.state.nomorHp}
                onChange={this.handleInputChange}
                placeholder="08135519***"
              />
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
  }
}
