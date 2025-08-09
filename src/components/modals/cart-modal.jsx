
const CartModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="cart-modal-backdrop">
            <div className="cart-modal">
                <button className="cart-close" onClick={onClose}>×</button>
                <h2>Savat</h2>
                <p>Hozircha savat bo‘sh</p>
            </div>
        </div>
    );
};

export default CartModal;