import { useState } from 'react';
import { useProductos } from './hooks/useProductos';
import { ProductoList } from './components/ProductoList';
import { CarritoPanel } from './components/CarritoPanel';

export function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    if (!carrito.some((item) => item.id === producto.id)) {
      setCarrito([...carrito, producto]);
    }
  };

  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  if (cargando) return <div className="mensaje">Cargando...</div>;
  if (error) return <div className="mensaje error">Error: {error}</div>;

  return (
    <div>
      <h1>Mini Tienda</h1>
      <div className="layout">
        <ProductoList 
          productos={productos} 
          onAgregar={agregarAlCarrito} 
          carrito={carrito} 
        />
        <CarritoPanel 
          carrito={carrito} 
          onQuitar={quitarDelCarrito} 
          onVaciar={vaciarCarrito} 
        />
      </div>
    </div>
  );
}