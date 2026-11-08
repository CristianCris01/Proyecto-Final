import { FaRegHeart, FaStar } from 'react-icons/fa';
import './Card.css';

function Card({ product }) {
  return (
    <article className="productItemCard">
      <div className="productItemImage">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="productItemBadge">{product.badge}</span>}
        <span className="productItemFavorite" aria-hidden="true">
          <FaRegHeart />
        </span>
      </div>

      <div className="productItemInfo">
        <p className="productItemCategory">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="productItemDescription">{product.description}</p>
        <div className="productItemRating" aria-label={`Calificación ${product.rating} de 5`}>
          <span aria-hidden="true">
            {Array.from({ length: product.rating }, (_, index) => <FaStar key={index} />)}
          </span>
          <small>({product.reviews})</small>
        </div>
        <div className="productItemBottom">
          <p className="productItemPrice">${product.price.toLocaleString('es-CL')} <span>CLP</span></p>
          <span className="productItemAvailability">Disponible</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
