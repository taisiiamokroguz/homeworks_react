import "./Card.css";

const Card = ({ isOnDisc, numDisc, name, exprice,photo }) => {
    const numericExprice = parseFloat(exprice.replace('$', ''));
    const discountedPrice = isOnDisc ? numericExprice - (numericExprice * numDisc / 100) : null;

    return (
        <div className={`card ${isOnDisc ? 'onDisc' : ''}`}>
            {isOnDisc && <button className="button-disc">{numDisc}%</button>}
            <p className="name">{name}</p>
            <img 
                className="photo-product"
                src={photo} 
                alt={name} 
            />
            <div className="prices">
                {isOnDisc && <p className="exprice" style={{ textDecoration: 'line-through' }}>{exprice}</p>}
                <p className="price">
                    {isOnDisc ? `$${discountedPrice.toFixed(2)}` : exprice}
                </p>
            </div>
        </div>
    );
};

export default Card;
