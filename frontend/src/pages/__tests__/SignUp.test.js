import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../SignUp";

// Mock the API
jest.mock("../../api/user", () => ({
  register: jest.fn(),
}));

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

test("renders sign up form", () => {
  renderWithRouter(<SignUp />);
  expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/firstName/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/lastName/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/confirmPassword/i)).toBeInTheDocument();
});

test("shows error when passwords don't match", async () => {
  renderWithRouter(<SignUp />);
  
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const confirmPasswordInput = screen.getByPlaceholderText(/confirmPassword/i);
  const submitButton = screen.getByText(/Sign Up/i);
  
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "password456" } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });
}); 