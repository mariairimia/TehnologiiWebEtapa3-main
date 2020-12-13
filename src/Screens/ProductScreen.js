import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';


function ProductScreen(props) {
    const product = data.products.find( x => x._id === props.match.params.id);

    return <div>
        <div className="back-to-result">
            <Link  to="/">Inapoi la pagina principala</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <div class="rating">
                        <span>
                            <i  class="fa fa-star"></i>
                        </span>
                        <span>
                            <i  class="fa fa-star"></i>
                        </span>
                        <span>
                            <i  class="fa fa-star"></i>
                        </span>
                        <span>
                            <i  class="fa fa-star"></i>
                        </span>
                        <span>
                            <i  class="fa fa-star"></i>
                        </span>

                    </div>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li>
                        <b> Price: {product.price} lei</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Pret: {product.price} lei
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Cantitate: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button primary">
                            Adauga in cos
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        
   
    </div>
}

export default ProductScreen;