import { useState } from "react";
import Modal from "./Modal/Modal";
import Content from "./Modal/Content";
import './Modal/Style.css';


function ModalWindow() {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="container-modal">
            {isOpen && 
            <Modal setIsOpen={setIsOpen}>
            <Content setIsOpen={setIsOpen}/>
            </Modal>
            }
        </div>
    )
}

export default ModalWindow;