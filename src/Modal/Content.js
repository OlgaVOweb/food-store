import './Style.css';

const Content = ({setIsOpen}) => {
    return (
        <div className="modal_content">
            <p>Promotion of the day - 20%  discount on fruits and vegetables</p>
            <button className='btn' onClick={() => setIsOpen(false)}>Close</button>
        </div>
    )
}

export default Content;