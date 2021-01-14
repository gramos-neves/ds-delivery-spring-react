import { Product } from "../../models/Product-Types";
import { checkIsSelected } from "../../util/helpers";
import ProductsCard from "../ProductCard"
import './styles.css';


type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

const ProductsList = ({ products, onSelectProduct, selectedProducts }: Props) => {

    return (
        <div className="orders-list-container">
            <div className="orders-list-items">

                {products.map(resp => {
                    return <ProductsCard
                        key={resp.id}
                        product={resp}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, resp)} />
                })}

            </div>
        </div>
    )
}



export default ProductsList

