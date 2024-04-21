/// <reference types="cypress" />

import ItemPage from "../../page-objects/ItemPage";

describe("Item Page Tests", () => {
  beforeEach(() => {
    ItemPage.open();
  });

  it("Should display the product image", () => {
    ItemPage.productImage.should("be.visible");
  });

  it("Should display the product name", () => {
    ItemPage.productName.should("be.visible");
  });

  it("Should display the product description", () => {
    ItemPage.productDescription.should("be.visible");
  });

  it("Should display the product price", () => {
    ItemPage.productPrice.should("be.visible");
  });

  it('Should show "Remove" button after clicking "Add to Cart"', () => {
    ItemPage.addToCart();
    ItemPage.removeFromCartButton.should("be.visible");
  });

  it('Should show "Add to Cart" button after clicking "Remove"', () => {
    ItemPage.addToCart();
    ItemPage.removeFromCart();
    ItemPage.addToCartButton.should("be.visible");
  });
});
