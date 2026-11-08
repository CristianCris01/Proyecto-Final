import NavBar from '../Componentes/NavBar';
import Footer from './Footer';
import Logo from '../assets/Logo2.png';
import { GoGift } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";




const benefits = [
  {
    icon: <FaRegHeart />,
    title: 'Dettalles con amor',
    text: 'Cada producto es de excelente calidad.',
  },
  {
    icon: <SiMaterialformkdocs />,
    title: 'Materiales confiables',
    text: 'Trabajamos con materiales seleccionados y sustentables.',
  },
  {
    icon: <GoGift />,
    title: 'Ideal para regalar',
    text: 'Disenos unicos para momentos inolvidables.',
  },
  {
    icon: <FaRegStar />,
    title: 'Exclusivo y personal',
    text: 'Creamos productos que reflejan tu estilo.',
  },
];

const products = [
  'Dormitorio y Closet',
  'Hombre, mujer y niños',
  'Deporte, outdoor y camping',
  'Regalos mas vendidos',
];

function Home() {
  return (
    <>
    <main className="homePage">
      <NavBar />

      <section className="heroSection" id="inicio">
        <div className="heroContent">
          <p className="heroEyebrow">Detalles que</p>
          <h1>cuentan historias</h1>
          <div className="sectionDivider">
            <span></span>
            <b>♥</b>
            <span></span>
          </div>
          <p className="heroCopy">
            Productos para el hogar, que hacen unicos tus momentos especiales. 
          </p>
          <a className="primaryButton" href="#productos">Conoce mas</a>
        </div>
      </section>

      <section className="benefitsStrip" id="sobre-mi">
        {benefits.map((benefit) => (
          <article className="benefitItem" key={benefit.title}>
            <div className="benefitIcon">{benefit.icon}</div>
            <h2>{benefit.title}</h2>
            <p>{benefit.text}</p>
          </article>
        ))}
      </section>

      <section className="featuredSection" id="productos">
        <p className="sectionTitle">Productos destacados</p>
        <div className="sectionDivider small">
          <span></span>
          <b>♥</b>
          <span></span>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product}>
              <img src={Logo} alt={product} />
              <div>
                <h3>{product}</h3>
                <p>Contamos con una amplia selección de productos para cada necesidad.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default Home;
