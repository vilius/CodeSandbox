import { render, screen, waitFor } from "@testing-library/react";
import { App } from "App";

jest.mock("./utils", () => {
  const originalModule = jest.requireActual("./utils");
  return {
    ...originalModule,
    typingSpeed: 1,
  };
});

test("renders the captured flag as a list", async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../);
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    const p = screen.getByText("p");
    expect(p).toBeInTheDocument();
  });

  await waitFor(() => {
    const r = screen.getByText("r");
    expect(r).toBeInTheDocument();
  });

  await waitFor(() => {
    const o = screen.getByText("o");
    expect(o).toBeInTheDocument();
  });

  await waitFor(() => {
    const d = screen.getByText("d");
    expect(d).toBeInTheDocument();
  });

  await waitFor(() => {
    const u = screen.getByText("u");
    expect(u).toBeInTheDocument();
  });

  await waitFor(() => {
    const c = screen.getByText("c");
    expect(c).toBeInTheDocument();
  });

  await waitFor(() => {
    const t = screen.getByText("t");
    expect(t).toBeInTheDocument();
  });
});
