const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="cart-modal-content">
            {/* Header */}
            <div className="cart-header">
                <h3 className="cart-title">Savat</h3>
                <button className="cart-close" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                </button>
            </div>

            {/* Body */}
            <div className="cart-body" id="cartBody">
                <div className="cart-empty" id="cartEmpty">
                    <small>Ha ul-bul narsa qo'shmaymizmi bu yerga?</small>
                </div>
                <div className="cart-items" id="cartItems">
                    {/* Cart items will be populated dynamically */}
                </div>
            </div>

            {/* Footer */}
            <div className="cart-footer" id="cartFooter" style={{ display: "none" }}>
                <div className="cart-total">
                    <span className="cart-total-label">Summa</span>
                    <span className="cart-total-price" id="cartTotalPrice">0 so&apos;m</span>
                </div>
                <div className="cart-buttons">
                    <button className="cart-checkout-btn" id="cartCheckoutBtn" disabled>
                        Buyurtma berish
                    </button>
                    <button className="cart-view-btn" id="cartViewBtn">
                        Savat
                    </button>
                </div>
                <div className="anti-stop">
                    <span>Yoki xaridlarni anti-to&apos;xtatish</span>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
