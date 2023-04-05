import { render, screen } from "@testing-library/react";
import { App } from "App";

test("renders the captured flag", () => {
  render(<App />);
  const linkElement = screen.getByText(/Product/i);
  expect(linkElement).toBeInTheDocument();
});
