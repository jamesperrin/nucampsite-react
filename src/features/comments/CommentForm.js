import { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  ButtonGroup,
  ButtonToolbar,
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const initialValues = { rating: '', author: '', commentText: '' };

  const handleSubmit = (values) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: parseInt(values.rating),
      author: values.author,
      text: values.commentText,
    };

    console.log(JSON.stringify(comment, null, 2));
    setModalOpen(false);
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
      </Button>
      <Modal toggle={() => setModalOpen(false)} isOpen={modalOpen}>
        <ModalHeader>Add Comment</ModalHeader>
        <ModalBody>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormGroup>
                <Label htmlFor='rating'>Rating</Label>
                <Field name='rating' id='rating' as='select' className='form-control'>
                  <option>Select...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Field>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='author'>Your Name</Label>
                <Field name='author' id='author' placeholder='Your Name' className='form-control' />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='commentText'>Comment</Label>
                <Field name='commentText' id='commentText' className='form-control' />
              </FormGroup>

              <ButtonToolbar>
                <ButtonGroup className='me-2'>
                  <Button type='submit' color='primary'>
                    Submit
                  </Button>
                </ButtonGroup>
                <ButtonGroup className='me-2'>
                  <Button type='reset' color='secondary'>
                    Reset
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type='cancel' color='danger' onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
