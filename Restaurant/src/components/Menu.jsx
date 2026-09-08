

const Menu = () =>{
return (
<section className="menu">
    <div className="container">
      <h2 className="section-title">Наше меню</h2>
      <div className="menu__grid">
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Margherita"
            alt="Пицца Маргарита"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Пицца</span>
            <h3 className="dish-card__title">Маргарита</h3>
            <p className="dish-card__meta">330 г · Вегетарианское</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">590 ₽</span>
              <span className="dish-card__rating">★ 4.9</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Carbonara"
            alt="Паста Карбонара"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Паста</span>
            <h3 className="dish-card__title">Карбонара</h3>
            <p className="dish-card__meta">280 г · Классика</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">490 ₽</span>
              <span className="dish-card__rating">★ 4.8</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Tiramisu"
            alt="Тирамису"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Десерт</span>
            <h3 className="dish-card__title">Тирамису</h3>
            <p className="dish-card__meta">150 г · С кофе</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">350 ₽</span>
              <span className="dish-card__rating">★ 4.9</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Bruschetta"
            alt="Брускетта"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Закуски</span>
            <h3 className="dish-card__title">Брускетта с томатами</h3>
            <p className="dish-card__meta">180 г · Вегетарианское</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">290 ₽</span>
              <span className="dish-card__rating">★ 4.6</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Risotto"
            alt="Ризотто с грибами"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Основные блюда</span>
            <h3 className="dish-card__title">Ризотто с грибами</h3>
            <p className="dish-card__meta">320 г · Острое</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">560 ₽</span>
              <span className="dish-card__rating">★ 4.7</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
        <article className="dish-card">
          <img
            className="dish-card__image"
            src="https://placehold.co/400x220?text=Panna+Cotta"
            alt="Панна-котта"
          />
          <div className="dish-card__body">
            <span className="dish-card__category">Десерт</span>
            <h3 className="dish-card__title">Панна-котта</h3>
            <p className="dish-card__meta">140 г · С ягодным соусом</p>
            <div className="dish-card__footer">
              <span className="dish-card__price">320 ₽</span>
              <span className="dish-card__rating">★ 4.8</span>
            </div>
            <button className="btn btn--primary btn--full">В корзину</button>
          </div>
        </article>
      </div>
    </div>
  </section>
  )
  }

  export default Menu