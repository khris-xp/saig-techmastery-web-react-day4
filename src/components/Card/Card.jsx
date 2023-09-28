import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.image} alt="rover" />
            </div>
            <div className="card-body">
                <span className="tag tag-teal">{props.category}</span>
                <h4>
                    {props.name}
                </h4>
                <h5>
                    {props.description}
                </h5>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default Card