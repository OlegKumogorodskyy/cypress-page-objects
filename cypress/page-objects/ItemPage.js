/// <reference types="cypress" />

import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

import userData from "../fixtures/userData.json";

class ItemPage extends BasePage {
  get productImage() {
    return cy.get(".inventory_details_img");
  }

  get productDescription() {
    return cy.get(".inventory_details_desc");
  }

  get productPrice() {
    return cy.get(".inventory_details_price");
  }

  get productName() {
    return cy.get(".inventory_details_name");
  }

  get addToCartButton() {
    return cy.get(".btn_inventory").contains("Add to cart");
  }

  get removeFromCartButton() {
    return cy.get(".btn_inventory").contains("Remove");
  }

  get allItems() {
    return cy.get(".inventory_item");
  }
  open() {
    super.open("");
    LoginPage.login(
      userData.userNames.correctUser,
      userData.passwords.correctPassword
    );
    this.navigateToItemPageByIndex(0);
    cy.url().should("include", "/inventory-item.html");
  }
  navigateToItemPageByIndex(itemIndex) {
    this.allItems.eq(itemIndex).find(".inventory_item_name").click();
  }

  addToCart() {
    this.addToCartButton.click();
  }

  removeFromCart() {
    this.removeFromCartButton.click();
  }
}

export default new ItemPage();
