import httpServices from "./httpServices";

export function createCard(card) {
  return httpServices.post("/cards/create-card", card);
}

export function getCards() {
  return httpServices.get("/cards");
}

export function getOneCard(id) {
  return httpServices.get(`/cards/${id}`);
}

export function getAllUserCards(userProducts) {
  return httpServices.post("/cards/mycards", userProducts);
}

export function updateCard(card) {
  return httpServices.put("/cards/edit", card);
}

export function deleteCard(card) {
  return httpServices.put("/cards/delete", card);
}
