import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type Todo = Array<{
  id: string;
  completed: boolean;
  description: string;
}>;

export function useTodo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo>(() => {
    const storagedItems = localStorage.getItem("@_todo_list");

    if (storagedItems) {
      return JSON.parse(storagedItems) as Todo;
    }

    return [] as Todo;
  });

  useEffect(() => {
    localStorage.setItem("@_todo_list", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!inputValue || !inputValue.trim()) return;

    setTodos((prevValue) => [
      ...prevValue,
      {
        description: inputValue,
        completed: false,
        id: Math.random().toString(36).substring(2),
      },
    ]);
    setInputValue("");
  }

  const completedTodos = useMemo(() => {
    return todos.reduce((prev, curr) => {
      if (curr.completed) {
        prev += 1;
      }

      return prev;
    }, 0);
  }, [todos]);

  const handleDeleteTodoItem = useCallback((itemId: string) => {
    setTodos((prevValue) => prevValue.filter((todo) => todo.id !== itemId));
  }, []);

  const handleToggleCompleteTodoItem = useCallback((itemId: string) => {
    setTodos((prevValue) =>
      prevValue.map((todo) => {
        if (todo.id === itemId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  }, []);

  return {
    todos,
    handleToggleCompleteTodoItem,
    handleDeleteTodoItem,
    completedTodos,
    setInputValue,
    inputValue,
    handleSubmit,
  };
}
