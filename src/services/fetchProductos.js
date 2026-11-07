export async function fetchProductos() {
  const response = await fetch('https://dummyjson.com/products?limit=12');
  if (!response.ok) {
    throw new Error('Error al obtener los productos');
  }
  const data = await response.json();
  return data.products;
}