const Card = ({image,title,category,weight,descripton,price,rating}) => {
    return (
<article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Margherita"
            alt='${}'
          />
          <div className="dish-card__body">
            <span className="dish-card__category">{category}</span>
            <h3 className="dish-card__title">{title}</h3>
            <p className="dish-card__meta">{weight}*{descripton}</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">{price}</span>
              <span className="dish-card__rating">{rating}</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
    )
}

export default Card