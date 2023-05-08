import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("render categories if the request succeeds", async () => {
    //Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { name: "مردانه", link: "/category/cloths/men", children: [] },
      ],
    });
    render(<App />);

    //Act nothing...

    //Assert
    const accordionElement = await screen.findAllByTestId("accordion-item");
    expect(accordionElement).not.toHaveLength(0);
  });
});
