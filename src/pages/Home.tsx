import { useTodo } from "../hooks/useTodo";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { EmptyList } from "../components/EmptyList";
import { Item } from "../components/Item";

import plustImg from "../assets/Plus.svg";
import trashImg from "../assets/Trash.svg";

import S from "./Home.module.css";

export function Home() {
  const {
    completedTodos,
    handleDeleteTodoItem,
    handleSubmit,
    handleToggleCompleteTodoItem,
    inputValue,
    setInputValue,
    todos,
  } = useTodo();

  return (
    <>
      <Header />

      <div className={S.container}>
        <form className={S.inputSection} onSubmit={handleSubmit}>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <div>
            <Button type="submit">
              Criar
              <img src={plustImg} alt="Icon de criar nova tarefa" />
            </Button>
          </div>
        </form>

        <main className={S.list}>
          <div className={S.listCount}>
            <p className={S.__total}>
              Tarefas criadas
              <span>{todos.length}</span>
            </p>

            <p className={S.__completed}>
              Concluídas
              <span>{completedTodos}</span>
            </p>
          </div>

          {!todos.length ? (
            <EmptyList />
          ) : (
            todos.map((todo) => (
              <Item.Root key={todo.id} completed={todo.completed}>
                <Item.Check
                  checked={todo.completed}
                  onCheck={() => handleToggleCompleteTodoItem(todo.id)}
                />
                <Item.Description description={todo.description} />
                <Item.Action onAction={() => handleDeleteTodoItem(todo.id)}>
                  <img src={trashImg} alt="Icone para deletar" />
                </Item.Action>
              </Item.Root>
            ))
          )}
        </main>
      </div>
    </>
  );
}
