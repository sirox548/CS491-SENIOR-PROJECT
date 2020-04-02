import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color="danger" onClick={toggle}>OTHER</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Add any soft skills that you believe you have</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <input list="other1" name="other2" />
            <datalist id="other1">
              <option value="volunteered in local hospital "></option>
              <option value="execllent Communication "></option>
              <option value="Leadership experince"></option>
              <option value="Abilty to work under pressure"></option>
              <option value="High work ethic"></option>
              <option value="Organized"></option>
            </datalist>
            <input type="submit" />
          </form>

        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;