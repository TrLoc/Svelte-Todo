<script>
  import { createTodoStore } from "./todos";
  import TodoList from "./TodoList.svelte";
  import { flip } from "svelte/animate";
  import { send, receive } from "./transition";

  const todos = createTodoStore([
    {
      done: false,
      description: "Learn English",
      id: 0,
    },
    {
      done: false,
      description: "Learn Svelte",
      id: 0,
    },
    {
      done: true,
      description: "Buy some instant noodles",
      id: 0,
    },
    {
      done: false,
      description: "Feed the dog",
      id: 0,
    },
    {
      done: false,
      description: "Fix some bugs",
      id: 0,
    },
  ]);
</script>

<div class="board">
  <h1 class="title">TO DO LIST</h1>
  <input
    placeholder="What do you need to do today?"
    on:keydown={(e) => {
      if (e.key !== "Enter") return;

      todos.add(e.currentTarget.value);
      e.currentTarget.value = "";
    }}
  />

  <div class="todo">
    <h2>todo</h2>
    <TodoList store={todos} done={false} />
  </div>

  <div class="done">
    <h2>done</h2>
    <TodoList store={todos} done={true} />
  </div>
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    max-width: 36em;
    margin: 2em auto;
  }

  .title {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #805a46;
    display: grid;
    grid-column: 1/3;
    place-items: center;
  }

  .board > input {
    font-size: 1.4em;
    grid-column: 1/3;
    padding: 0.5em;
    margin: 0 0 1rem 0;
  }
</style>
