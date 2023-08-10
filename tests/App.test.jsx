import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App.jsx";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

// describe("App", () => {
//   it("renders headline", () => {
//     render(<App />);
//     const headline = screen.getByText(/It works and you found me!/i);
//     expect(headline).toBeInTheDocument();
//   });
// });
