import httpServices from "./httpServices";

export function createUser(user) {
  return httpServices.post("/users/register", user);
}

export function signinUser(user) {
  return httpServices.post("/users/signin", user);
}

export function getUser() {
  return httpServices.get("/users/userdata");
}

export function addToCartNew(product) {
  return httpServices.put("/users/add-product", product);
}

export function updateCart(cart) {
  return httpServices.put("/users/edit-products-quantity", cart);
}

export function deleteProduct(id) {
  return httpServices.put("/users/delete-product", id);
}

// export function addToCart(product) {
//   return httpServices.put("/users/add-card", product);
// }
