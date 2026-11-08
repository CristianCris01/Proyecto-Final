import Card from '../Componentes/Card';
import './Productos.css';

const products = [
  {
    id: 1,
    name: 'Vela de soja artesanal',
    category: 'Decoración',
    description: 'Aroma suave y cálido para acompañar tus momentos de descanso.',
    price: 12990,
    rating: 5,
    reviews: 12,
    badge: 'Más vendido',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Funda de cojín floral',
    category: 'Hogar y textil',
    description: 'Un detalle delicado para darle vida y color a cualquier espacio.',
    price: 8990,
    rating: 5,
    reviews: 8,
    badge: 'Hecho a mano',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Taza de cerámica',
    category: 'Cocina',
    description: 'Pieza de acabado artesanal, perfecta para disfrutar tu bebida favorita.',
    price: 10990,
    rating: 4,
    reviews: 6,
    badge: '',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Canasto tejido natural',
    category: 'Organización',
    description: 'Una forma práctica y bonita de mantener tus espacios ordenados.',
    price: 15990,
    rating: 5,
    reviews: 10,
    badge: 'Favorito',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Difusor de aroma',
    category: 'Bienestar',
    description: 'Fragancia envolvente para crear un ambiente acogedor en casa.',
    price: 13990,
    rating: 5,
    reviews: 4,
    badge: '',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    name: 'Set de regalo especial',
    category: 'Regalos',
    description: 'Una selección de pequeños detalles para sorprender a alguien especial.',
    price: 24990,
    rating: 5,
    reviews: 7,
    badge: 'Para regalar',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=85',
  },
];

export default function Productos() {
  return (
    <main className="productosPage">
      <section className="productosIntro">
        <p className="productosEyebrow">Colección Meli</p>
        <h1>Encuentra ese detalle especial</h1>
        <p>Objetos y regalos elegidos para hacer más lindos tus momentos.</p>
      </section>

      <section className="productosCatalog" aria-label="Catálogo de productos">
        <div className="productosCatalogHeader">
          <h2>Nuestros productos</h2>
          <span>{products.length} productos</span>
        </div>
        <div className="productosGrid">
          {products.map((product) => <Card key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}