# Agents

This document describes the AI agents and their roles in this project.

## Overview

AI agents assist with development tasks following the project's coding standards and best practices.

## Agent Guidelines

### Core Principles
Accessibility First: All code and documentation must follow WCAG 2.2 A & AA guidelines and accessibility best practices
Semantic HTML: Always use proper semantic markup
ARIA Standards: Follow WAI-ARIA 1.2 authoring practices correctly
Testing Focus: Maintain comprehensive testing documentation
AI outputs:Be concise in your outputs and not overly verbose.

### Code Style
- Use TypeScript exclusively (no JavaScript)
- Prefer named exports over default exports
- Prefer async/await over callbacks
- Follow ESLint rules and Prettier formatting
- Use strict TypeScript; avoid `any` types

### React Development
- One component per file (multiple pure stateless components sometimes permissible)
- Keep components focused and modular
- Use CSS Modules for styling
- Follow functional component patterns with hooks

### File Structure
- Components go in /src/components/ with kebab-case folder names
- Each component should have its own folder with .tsx, .scss, and .test.tsx files
- Shared types go in /src/shared/types/
- Utilities go in /src/utils/

### Testing
- Add unit tests using Jest and React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)
- Test user behavior (e.g., `fireEvent.click`) instead of internal state
- Use `screen.getByRole` for element selection
- Mock API calls with `jest.fn()`
- Run tests before committing: npm test
- Run linting: npm run lint and npm run lint:scss
- Ensure accessibility testing is included in documentation

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
