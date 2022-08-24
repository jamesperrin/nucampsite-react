import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: 'By Phone',
        feedback: '',
      }}>
      <Form>
        <FormGroup row key='1'>
          <Label htmlFor='firstName' md='2'>
            First Name
          </Label>
          <Col md='10'>
            <Field
              className='form-control'
              name='firstName'
              id='firstName'
              placeholder='First Name'
            />
          </Col>
        </FormGroup>

        <FormGroup row key='2'>
          <Label htmlFor='lastName' md='2'>
            Last Name
          </Label>
          <Col md='10'>
            <Field className='form-control' name='lastName' id='lastName' placeholder='Last Name' />
          </Col>
        </FormGroup>

        <FormGroup row key='3'>
          <Label htmlFor='phoneNum' md='2'>
            Phone
          </Label>
          <Col md='10'>
            <Field className='form-control' name='phoneNum' id='phoneNum' placeholder='Phone' />
          </Col>
        </FormGroup>

        <FormGroup row key='4'>
          <Label htmlFor='email' md='2'>
            Email
          </Label>
          <Col md='10'>
            <Field
              className='form-control'
              name='email'
              id='email'
              placeholder='Email'
              type='email'
            />
          </Col>
        </FormGroup>
        <FormGroup row key='5'>
          <Label check md={{ size: 4, offset: 2 }}>
            <Field name='agree' type='checkbox' className='form-check-input' />
            <span>&nbsp;</span> May we contact you?
          </Label>
          <Col md='4'>
            <Field className='form-control' name='contactType' as='select'>
              <option value='byPhone'>By Phone</option>
              <option value='byEmail'>By Email</option>
            </Field>
          </Col>
        </FormGroup>

        <FormGroup row key='6'>
          <Label htmlFor='feedback' md='2'>
            Your Feedback
          </Label>
          <Col md='10'>
            <Field className='form-control' name='feedback' id='feedback' as='textarea' rows='12' />
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
