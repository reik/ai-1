import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("increments and resets the counter", () => {
    // Arrange
    render(<App />);
    const increaseButton = screen.getByRole("button", { name: /increase/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });
    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();

    // Act
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    // Assert
    expect(screen.getByText(/current count: 2/i)).toBeInTheDocument();

    // Act
    fireEvent.click(resetButton);

    // Assert
    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
  });
});
