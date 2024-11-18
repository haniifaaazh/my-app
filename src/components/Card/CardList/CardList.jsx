import PropTypes from "prop-types";
import Card from "../components/Card/Card";

export default function CardList({products}) {
    return (
        <div className="card-list">
            {products.map((prod, index) => (
                <Card key={prod.id} product={prod} />
            ))}
        </div>         
    );
}



CardList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}