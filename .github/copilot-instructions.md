# Copilot Instructions

- Use TypeScript (no JavaScript).
- Prefer async/await over callbacks.
- Follow ESLint rules.
- Use Prettier formatting.
- Use strict TypeScript; avoid `any`.
- React: one component per file (multiple pure stateless components are sometimes permissible).
- Use CSS Modules.
- Always add unit tests using Jest and React Testing Library.
- Tests follow AAA (Arrange, Act, Assert).
- Test user behavior (e.g., `fireEvent.click`) instead of internal state.
- Use `screen.getByRole` for element selection in tests.
- Mock API calls with `jest.fn()`.
- Never commit secrets.
- Ensure `node_modules` and `vendor` are ignored.
