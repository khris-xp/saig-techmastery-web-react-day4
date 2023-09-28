import PropTypes from 'prop-types'
import './ProductCard.css'

const ProductCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="Denim Jeans" />
            <h1>{props.title}</h1>
            <p className="price">${props.price}</p>
            <p>{props.category}</p>
            <p><button>Add to Cart</button></p>
        </div>

    )
}

ProductCard.propTypes = {
    title: PropTypes.string.title,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default ProductCard