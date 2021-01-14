import { handleFormatPrice } from '../../util/helpers';
import './styles.css';


type Props={
    amount: number;
    totalPrice:number;
    onSubmit: () => void;
}



const OrderSummary = ({amount, totalPrice, onSubmit}: Props) => {

    return (
        <div className="order-summary-container" 
           >
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                  Pedidos selecionados
               </span>
                    <span className="order-summary-total">
                        <strong className="amount-selected">{handleFormatPrice(totalPrice)}</strong>
                   valor total
               </span>
                </div>
                <button 
                    className="order-summary-make-order" 
                     onClick={onSubmit}  >
                    Fazer pedido
                </button> 
            </div>
        </div>
    )
}


export default OrderSummary