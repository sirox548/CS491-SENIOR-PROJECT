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
      <Button color="danger" onClick={toggle}>ADD EDUCATION</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Add your completed education to your list of skills</ModalHeader>
        <ModalBody>
          <form action="/action_page.php">
            <input list="education1" name="education2" />
            <datalist id="education1">
              <option value="Highschool diploma"></option>
              <option value="associates in computer science"></option>
              <option value="associates in  culinary arts"></option>
              <option value="associates in health science"></option>
              <option value="bachelors in computer science"></option>
              <option value="bachelors in  culinary arts"></option>
              <option value="bachelors in health science"></option>
              <option value="Masters in computer science"></option>
              <option value="Masters in  culinary arts"></option>
              <option value="Masters in health science"></option>
              <option value="doctorates in computer science"></option>
              <option value="doctorates in  culinary arts"></option>
              <option value="doctorates in health science"></option>
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