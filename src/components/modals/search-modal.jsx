
const SearchModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="search-modal-backdrop">
            <div className="search-modal">
                <button className="search-close" onClick={onClose}>×</button>
                <h2>Qidiruv</h2>
                <input type="text" placeholder="Mahsulot qidiring..." autoFocus />
            </div>
        </div>
    );
};

export default SearchModal;