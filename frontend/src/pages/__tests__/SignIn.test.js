// src/pages/__tests__/SignIn.test.js
import { render, screen } from "@testing-library/react";
import SignIn from "../SignIn";
test("renders sign in form", () => {
  render(<SignIn />);
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
});
