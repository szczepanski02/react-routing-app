import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({match}) => {
    return (
        <>
            <h2>Strona produktu</h2>
            <Product id={match.params.id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </>
    );
}
export default ProductPage;