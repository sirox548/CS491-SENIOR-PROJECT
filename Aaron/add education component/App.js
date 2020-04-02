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
      <Button color="danger" onClick={toggle}>ADD SKILLS</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Add Any skills that you have obtained outside formal education</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <input list="skills1" name="skills2" />
            <datalist id="skills1">
              <option value="Python"></option>
              <option value="React/React.js"></option>
              <option value="java"></option>
              <option value="CPR certified"></option>
              <option value="Epic trained"></option>
              <option value="certified phlebtomy"></option>
              <option value="certified Chef"></option>
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
