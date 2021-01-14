import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';
import ProductsList from '../../components/ProductsList/ProductsList';
import StepsHeader from '../../components/StepsHeader.tsx';
import { OrderLocationData, Product } from '../../models/Product-Types';
import api from '../../service/api';
import OrderLocation from '../OrderLocation';
import OrderSummary from '../OrderSummary';
import './styles.css';


const Orders = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        api.get('/products')
            .then(resp => setProducts(resp.data))
            .catch(err => console.log(err))
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = selectedProducts.some(item => item.id === product.id);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        api.post('/orders', payload).then(() => {
            toast.error('Pedido enviado com sucesso!');
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }


    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts} />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}



export default Orders
