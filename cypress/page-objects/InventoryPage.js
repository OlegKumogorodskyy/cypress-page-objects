/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from "../fixtures/userData.json";

class InventoryPage extends BasePage {
  get burgerMenu() {
    return cy.get(".bm-burger-button");
  }

  get cartIcon() {
    return cy.get("a.shopping_cart_link");
  }

  get sortingDropdown() {
    return cy.get(".product_sort_container");
  }

  get sortingOptions() {
    return this.sortingDropdown.find("option");
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
  }

  verifySortingOptionsCount(count) {
    this.sortingOptions.should("have.length", count);
  }

  navigateToCart() {
    this.cartIcon.click();
    cy.url().should("include", "/cart.html");
  }

  navigateToItemPage(itemIndex) {
    this.allItems.eq(itemIndex).find(".inventory_item_name").click();
  }
}

export default new InventoryPage();
