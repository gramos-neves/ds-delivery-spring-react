
// import { ReactComponent as Pizza } from '../../asserts/pizza.svg';
import { Product } from '../../models/Product-Types';
import { handleFormatPrice } from '../../util/helpers';
import './styles.css';


type Props = {
    product: Product;
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}


const ProductsCard = ({ product, onSelectProduct, isSelected }: Props) => {

    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectProduct(product)}   >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img
                src={product.imageUri}
                className="order-card-image"
                alt={product.name}
            />
            <h3 className="order-card-price">
                {handleFormatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}



export default ProductsCard
