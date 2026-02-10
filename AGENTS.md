# Agents

This document describes the AI agents and their roles in this project.

## Overview

AI agents assist with development tasks following the project's coding standards and best practices.

## Agent Guidelines

### Code Style
- Use TypeScript exclusively (no JavaScript)
- Prefer async/await over callbacks
- Follow ESLint rules and Prettier formatting
- Use strict TypeScript; avoid `any` types

### React Development
- One component per file (multiple pure stateless components sometimes permissible)
- Use CSS Modules for styling
- Follow functional component patterns with hooks

### Testing
- Add unit tests using Jest and React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)
- Test user behavior (e.g., `fireEvent.click`) instead of internal state
- Use `screen.getByRole` for element selection
- Mock API calls with `jest.fn()`

### Security
- Never commit secrets
- Ensure `node_modules` and `vendor` are in `.gitignore`

### Restricted Files
- `.env` files must never be read, modified, or created by agents
- Environment variables should be accessed through the runtime environment only

## Development Workflow

Agents should:
1. Understand requirements before implementation
2. Write clean, maintainable code
3. Add appropriate tests
4. Validate changes don't break existing functionality
5. Follow minimal change principle
