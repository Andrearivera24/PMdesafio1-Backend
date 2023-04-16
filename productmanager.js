//Realizar una clase “ProductManager” que gestione un conjunto de productos.
class ProductManager {
  #id = 0; //--> genero un número aleatorio para la variable privada ID.

  //-> Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
  constructor() {
    this.products = [];
  }

  //-> Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
  getProducts() {
    return this.products;
  }

  #getID() {
    // método privado para que a mi ID inicial le incremente 1.
    this.#id++;
    return this.#id;
  }

  //-> Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que no se repita el campo “code”
    let filtro = this.products.filter((prod) => prod.code === code);
    if (filtro.length > 0) {
      console.log("El código ya existe");
      return;
    }
    const product = { title, description, price, thumbnail, code, stock };
    product.id = this.#getID(); // --> Al agregarlo, debe crearse con un id autoincrementable

    // Antes de pushear, valido que todos los campos estén completos

    if (
      product.title === undefined ||
      product.description === undefined ||
      product.price === undefined ||
      product.thumbnail === undefined ||
      product.code === undefined ||
      product.stock === undefined
    ) {
      console.log("Todos los campos son obligatorios, por favor completar.");
      return;
    }
    this.products.push(product); //--> Agrego el producto al array incial que estaba vacío.
  }

  //-> Debe contar con un método “getProductById” el cual debe buscar en el arreglo, el producto que coincida con el id
  //   En caso de no coincidir ningún id, mostrar en consola un error “Not found”

  getProductById(IdProduct) {
    const productIndex = this.products.findIndex(
      (product) => product.id === IdProduct
    ); //--> El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    if (productIndex === -1) {
      console.log("Not found");
      return;
    }
    console.log("El producto que coincide con el id es", productIndex);
  }
}

//Creo las instancias con la plantilla de la clase.
const Pmanager = new ProductManager();
Pmanager.addProduct(
  "Prueba 2",
  "Este es el desafío 1",
  "10 USD",
  "Ruta de imagen"
); //--> array incompleto, debería mostrar el mensaje de que todos los campos son obligatorios
Pmanager.addProduct(
  "Prueba 1",
  "Este es el desafío 1",
  "10 USD",
  "ruta de imagen",
  123,
  1
); // tiene 6 elementos, no debería mostrar el mensaje de completar todos los campos.

//------------------------------------------------------------Pruebas-------------------------------------------------------------------------

console.log(Pmanager.getProductById(2)); // sí me devolverá el index del elemento que contiene el id 2. en este caso 0.
console.log(Pmanager.getProductById(5)); // pregunto si está el id 5, me debería tirar "not found" porque el id incrmentado en 1 al inicial, es 2.
console.log(Pmanager.getProducts());
