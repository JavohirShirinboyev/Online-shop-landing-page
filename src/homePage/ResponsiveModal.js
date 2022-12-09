import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

function ResponsiveModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="responsive-modal">
      <Button onClick={toggle}>
        <AiOutlineSearch />
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Search</ModalHeader>
        <ModalBody>
          <div className="searchSection">
            <form action="#">
              <input
                type="text"
                className="searchInput"
                placeholder="Search For Products, Brands & Categories"
              />
              <button className="searchBtn" type="button">
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ResponsiveModal;
