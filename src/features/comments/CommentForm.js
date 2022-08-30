import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const CommentForm = ({ campiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Comment
      </Button>
      <Modal toggle={() => setModalOpen(false)} isOpen={modalOpen}>
        <ModalHeader>Add Comment</ModalHeader>
        <ModalBody>Campsite: {campiteId}</ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
