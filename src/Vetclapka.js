import "./veter.css";

function Vetclapka() {
  return (
    <>
      <section className="header">
        <div className="header__main">
          <div className="content1">
            <div className="logo">
              <img className="logo__img" src="https://static.vecteezy.com/system/resources/previews/007/559/355/non_2x/dog-a-minimalist-and-modern-dog-logo-illustration-free-vector.jpg" alt="лого" />
            </div>
            <div className="menu">
              <div className="menuConteiner">
                <ul>
                  <li className="elem">
                    <a href="#">Главная</a>
                  </li>
                  <li className="elem">
                    <a href="#">О нас</a>
                  </li>
                  <li className="elem">
                    <a href="#">Наши услуги</a>
                  </li>
                  <li className="elem">
                    <a href="#">контакты</a>
                  </li>
                  <li className="elem">
                    <a href="#">клиники</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1>Добро пожаловать в ветеринарную клинику</h1>
        <h2>Лапка</h2>
      </section>
      <div className="description">
        <p>
          Мы предлагаем широкий спектр услуг для здоровья и комфорта вашего питомца.
          Наши опытные ветеринары обеспечат качественную медицинскую помощь и
          индивидуальный подход к каждому питомцу. Мы заботимся о здоровье и счастье
          вашего питомца!
        </p>
      </div>
      <div className="content">
        <img
          src="https://media.istockphoto.com/id/1303833889/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%D1%80-%D0%BF%D0%BE%D0%B3%D0%BB%D0%B0%D0%B6%D0%B8%D0%B2%D0%B0%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=CTRHFsTxBxsxyyEb9yHEwxG5Ekrmvf0AJFN7wOEUTLU="
          alt="Услуга 1"
        />
        <p>
          Описание услуги 1. Мы предлагаем профессиональные консультации
          ветеринаров, комплексное лечение и реабилитацию питомцев.
        </p>
        <img
          src="https://media.istockphoto.com/id/579248574/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D1%8B%D0%B9-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D1%85.jpg?s=612x612&w=0&k=20&c=U-IIDtuqdxocWxf0ouyRfbZ6guNIyii9tlPI47JGkFM="
          alt="Услуга 2"
        />
        <p>
          Описание услуги 2. У нас вы можете пройти все необходимые процедуры для
          здоровья вашего питомца, включая вакцинацию, стерилизацию, чипирование и
          многое другое.
        </p>
        <img
          src="https://p2.zoon.ru/preview/eCX5mnOD5Ml6I0Ujw88nlQ/640x426x85/1/c/a/original_608be1efe23403303303ed13_618f708b91888.jpg"
          alt="Услуга 3"
        />
        <p>
          Описание услуги 3 . Мы осуществляем операции разной сложности, используя
          современное оборудование и методы лечения.
        </p>
        <img
          src="https://www.acana.ru/media/article/mozhno-li-kotam-sobachiy-suhoy-korm.jpg"
          alt="Услуга 4"
        />
        <p>
          Описание услуги 4. У нас вы можете приобрести качественные корма и
          медикаменты для вашего питомца.
        </p>
      </div>
      <div className="contacts">
        <p>Контакты</p>
        <p>Соцсети</p>
        <p>Почта</p>
      </div>
      <div className="footer">
        <p>Все права защищены © 2021</p>
      </div>
    </>
  );
}

export default Vetclapka;