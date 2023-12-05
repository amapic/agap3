import { render, screen, act } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";
// import Home from "../pages/index";
import Screen1 from "../components_agap2/Screen1";
import React from "react";

// const setup = () => {
  // return render(Home);
// };
// jest.mock('@react-three/cannon');

test("Item 1 menu", async () => {

  var hh = "";
  // act(() => {
  const result = render(<Screen1 />);


  await screen.findByRole("menu");

  expect(screen.getByRole("menu")).toHaveTextContent("agap2");
  //   expect(screen.getByRole('button')).toBeDisabled()
});
