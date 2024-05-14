import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Screen1 from "../components/Screen1";
import React from "react";

// const setup = () => {
  // return render(Home);
// };
// jest.mock('@react-three/cannon');

test("Item 1 menu", async () => {

  var hh = "";
  const result = render(<Screen1 />);


  await screen.findByRole("menu");

  expect(screen.getByRole("menu")).toHaveTextContent("Linkedin");
});
