import React from "react";
import { render, screen } from "@testing-library/react";
import MainMenu from "./MainMenu";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import App from "../../App";
import { LocationDisplay } from "../../App";
import "@testing-library/jest-dom";
describe("test MainMenu component", () => {
  // const history = createMemoryHistory();
  test("if true is truthy", () => {
    expect(true).toBeTruthy();
  });
  test("if true is true", () => {
    expect(true).toBe(true);
  });
  test("render MainMenu", () => {
    const history = createMemoryHistory();
    const path = "/help";
    history.push(path);
    render(
      // <App />,
      // { wrapper: MemoryRouter }
      <Router history={history}>
        <App />
      </Router>
    );

    screen.debug();
    expect(screen.getByTestId("location-display")).toHaveTextContent(path); //expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
