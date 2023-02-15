import React from 'react';
import { notFound } from 'next/navigation';

import { Todo } from '../../../../types/Todo';

export const dynamicParams = true;

type PageProps = {
  params: {
    id: string;
  };
};

const fetchTodo = async (id: string): Promise<Todo> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: Todo = await res.json();

  return todo;
};

async function TodoPage({ params: { id } }: PageProps) {
  const todo = await fetchTodo(id);

  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <h1>Todo: {todo.id}</h1>
      <p>{todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TodoPage;
