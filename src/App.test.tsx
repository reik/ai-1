import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.history.replaceState({}, "", "/dashboard");
  });

  it("redirects unauthenticated users to the login page", () => {
    // Arrange
    render(<App />);
    const loginHeading = screen.getByRole("heading", { name: /login/i });

    // Assert
    expect(loginHeading).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /dashboard/i })).not.toBeInTheDocument();
  });

  it("allows protected page access only after login and locks pages after logout", () => {
    // Arrange
    render(<App />);
    const usernameField = screen.getByRole("textbox", { name: /username/i });
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    // Act
    fireEvent.change(usernameField, { target: { value: "reiku" } });
    fireEvent.click(signInButton);
    fireEvent.click(screen.getByRole("button", { name: /profile/i }));

    // Assert
    expect(screen.getByRole("heading", { name: /profile/i })).toBeInTheDocument();
    expect(
      screen.getByText(/profile content is protected and only visible after login/i),
    ).toBeInTheDocument();

    // Act
    fireEvent.click(screen.getByRole("button", { name: /logout/i }));

    // Assert
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /profile/i })).not.toBeInTheDocument();
  });
});
