import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm='2'>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/' title='Home Page'>Home</Link>
              </li>
              <li>
                <Link to='/directory' title='Directory'>Directory</Link>
              </li>
              <li>
                <Link to='About' title='About'>About</Link>
              </li>
              <li>
                <Link to='Contact' title='Contact'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs='6' sm='3' className='text-center'>
            <h5>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram'
              href='http://instagram.com/'
              title='Instagram.com'>
              <i className='fa fa-instagram' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/'
              title='Facebook.com'>
              <i className='fa fa-facebook' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-twitter'
              href='http://twitter.com/'
              title='Twitter.com'>
              <i className='fa fa-twitter' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-google'
              href='http://youtube.com/'
              title='YouTube.com'>
              <i className='fa fa-youtube' />
            </a>
          </Col>
          <Col sm='4' className='text-center'>
            <a
              role='button'
              className='btn btn-link'
              href='tel:+12065551234'
              title='tel 1-206-555-1234'>
              <i className='fa fa-phone' /> 1-206-555-1234
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link'
              href='mailto:notreal@notreal.co'
              title='email campsites@nucamp.co'>
              <i className='fa fa-envelope-o' /> campsites@nucamp.co
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
