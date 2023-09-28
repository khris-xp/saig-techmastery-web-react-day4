import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../constants/data'
import './Home.css'

const Home = () => {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])

    function handleClick() {
        setCount(count + 1)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <>
            <div className='container'>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card name={item.name} image={item.image} description={item.description} category={item.category} />
                        </div>
                    )
                }
                )}
            </div>
            <div>
                <div>React Hooks</div>
                <button onClick={() => handleClick()}>Click {count}</button>
            </div>
            <div className='container'>
                {products.map((item, index) => {
                    return (
                        <div key={index}>
                            <ProductCard title={item.title} image={item.image} price={item.price} description={item.description} category={item.category} />
                        </div>
                    )
                }
                )}
            </div>
        </>
    )
}

export default Home