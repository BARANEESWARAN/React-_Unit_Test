import { screen, render } from "@testing-library/react";
import Form from "./Form";
import React from "react";
describe("form component testing", () => {
  it("render correctly", () => {
    render(<Form />);
    const headElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toBeEnabled;
  });
});
