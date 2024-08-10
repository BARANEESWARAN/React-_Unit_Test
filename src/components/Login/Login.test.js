import { fireEvent, render, screen } from "@testing-library/react";
import Login, { validateEmail } from "./Login";
import userEvent from "@testing-library/user-event";

describe("kogin component test", () => {
  it("render buttons on screeen", () => {
    render(<Login />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(2);
  });

  it("should fail validate email", () => {
    render(<Login />);
    const email = "barani";
    expect(validateEmail(email)).not.toBe(true);
  });

  it("email input accept", () => {
    render(<Login />);
    const inputElement = screen.getByPlaceholderText("Enter email");
    expect(inputElement).toBeInTheDocument();
    userEvent.type(inputElement, "barani");
    expect(inputElement.value).not.toMatch("barani@gmail.com");
  });

  test("passport input should have type password ", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should display alert if error", async () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    const password = screen.getByPlaceholderText("Password");
    const buttonList = screen.getByRole("button", {
      name: "Submit",
    });
    userEvent.type(email, "barani");
    userEvent.type(password, 123);
    userEvent.click(buttonList);
    const errorMsg = await screen.findByText("Email is not valid");
    expect(errorMsg).toBeInTheDocument();
  });
  test("should be able to reset the form", () => {
    render(<Login />);
    const resetBtn = screen.getByTestId("reset");
    const emailInputNode = screen.getByLabelText("Email");
    const passwordInputNode = screen.getByLabelText("Password");
    fireEvent.click(resetBtn);
    expect(emailInputNode.value).toMatch("");
    expect(passwordInputNode.value).toMatch("");
  });

  test("should be able to submit the form", async () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    const password = screen.getByPlaceholderText("Password");
    const buttonList = screen.getByRole("button", {
      name: "Submit",
    });

    userEvent.type(email, "dipesh@gmail.com");
    userEvent.type(password, "123456");
    userEvent.click(buttonList);
    const user = await screen.findByText("dipesh@gmail.com");
    expect(user).toBeInTheDocument();
  });
});
