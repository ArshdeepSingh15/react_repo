# Global Context Architecture

## Overview
This application now uses a centralized global context system with custom hooks to manage application-wide state.

## Architecture Components

### 1. **AppContext** (`src/contexts/AppContext.tsx`)
Global context provider that manages:
- **User State**: Current logged-in user name
- **Theme State**: Light or dark theme preference
- **Todos State**: Complete list of todos

### 2. **Custom Hooks**

#### `useUser()` (`src/hooks/useUser.ts`)
Hook to manage user data:
```typescript
const { userName, updateUserName } = useUser();
```
- `userName`: Current user's name
- `updateUserName(name)`: Update the user name

#### `useTodos()` (`src/hooks/useTodos.ts`)
Hook to manage todos:
```typescript
const { todos, addTodo, toggleTodo, deleteTodo, fetchTodos } = useTodos();
```
- `todos`: Array of all todos
- `addTodo(text)`: Add a new todo
- `toggleTodo(id)`: Toggle completed state
- `deleteTodo(id)`: Remove a todo
- `fetchTodos()`: Get current todos

#### `useTheme()` (`src/hooks/useTheme.ts`)
Hook to manage theme:
```typescript
const { theme, toggleTheme } = useTheme();
```
- `theme`: Current theme ("light" | "dark")
- `toggleTheme()`: Switch between themes

## Refactored Components

### **Greeting Component**
- Now uses `useUser()` hook instead of local state
- Reads and updates user name from global context
- Persists name to localStorage

### **TodoList Component**
- Now uses `useTodos()` hook instead of local state
- Reads todos from global context
- Uses `addTodo()`, `toggleTodo()`, `deleteTodo()` from hook
- Includes theme toggle button using `useTheme()`
- Applies dynamic styling based on current theme

### **TodoItem Component**
- Enhanced with delete button
- Supports theme-aware styling
- Props: `todo`, `onToggle`, `onDelete`, `theme`

### **App Component**
- Uses `useTheme()` to apply app-wide theme
- Background and text colors change with theme
- Smooth transitions between themes

## Setup

The entire app is wrapped with `AppProvider` in `src/index.tsx`:

```typescript
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
```

## Benefits

✅ **Centralized State**: All app state in one place
✅ **No Prop Drilling**: Access state anywhere via hooks
✅ **Separation of Concerns**: Logic separated from UI
✅ **Reusability**: Hooks can be used in any component
✅ **Type Safety**: Full TypeScript support
✅ **Easy Testing**: Hooks can be tested independently
