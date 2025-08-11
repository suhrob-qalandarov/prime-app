import './cart-modal.css'
import {Box, Stack, Typography} from "@mui/material";
import {CloseIcon} from "../../icons";
import {Link} from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
    const cartItems = [localStorage.getItem('cartItems')];
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('cart-modal')) {
            onClose();
        }
    };

    return (
        <div>
            <Stack className="cart-modal-content">
                {/* Header */}
                <Box className="cart-header">
                    <h3 className="cart-title">Savat</h3>
                    <button className="cart-close" onClick={onClose}>
                        <CloseIcon />
                    </button>
                </Box>

                {/* Body */}
                <Box className="cart-body" id="cartBody">

                    <div className="cart-empty" id="cartEmpty">
                        <small>Ha ul-bul narsa qo'shmaymizmi bu yerga?</small>
                    </div>
                    <Typography className="cart-items" id="cartItems">
                        {/* Cart items will be populated dynamically */}
                    </Typography>
                </Box>

                {/* Footer */}
                <Box className="cart-footer" id="cartFooter">
                    <div className="cart-total">
                        <span className="cart-total-label">Summa</span>
                        <span className="cart-total-price" id="cartTotalPrice">0 So&apos;m</span>
                    </div>
                    <Box className="cart-buttons">
                        <Link to='/order' className="cart-checkout-btn" id="cartCheckoutBtn" onClick={onClose}>
                            Buyurtma qilish
                        </Link>
                        <Link to='/cart' className="cart-view-btn" id="cartViewBtn" onClick={onClose}>
                            Savat
                        </Link>
                    </Box>
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: '15px',
                        marginBottom: '-5px',
                        fontWeight: 'normal',
                        letterSpacing: '0.8px',
                        padding: '8px',
                        color: '#6B7280',
                        fontFamily: "Noto Sans",
                        cursor: 'pointer'
                    }}>
                        <span onClick={onClose}>Yoki xaridlarni anti-to&apos;xtatish</span>
                    </Typography>
                </Box>
            </Stack>
        </div>
    );
};

export default CartModal;
