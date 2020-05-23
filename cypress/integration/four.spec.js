describe("Third Test", () => {
  it("Accepts input", () => {
    const text = "New Todo";
    cy.visit("/");
    cy.get(".new").type(text).should("have.value", text);
  });
});
