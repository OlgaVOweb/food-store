import './Style.css';

const Modal = ({setIsOpen, children}) => {

    const closeModal = e => {
        if (e.target.classList.contains('overlay')){
            setIsOpen(false)
        }
    }
    return (
        <div className='modal'>
            <div className='overLay' onClick={closeModal}>{children}</div>
        </div>
    )
}

export default Modal;