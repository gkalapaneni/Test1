type TodoBase = {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Todo =
  | (TodoBase & {
      status: 'pending';
    })
  | (TodoBase & {
      status: 'completed';
      completionMessage: string;
    });

export type ApiTodo = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  completionMessage?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTodoRequest = {
  title: string;
  description?: string;
};

export type UpdateTodoRequest = {
  title?: string;
  description?: string;
  completed?: boolean;
  completionMessage?: string;
};

export type InternalUpdateTodoRequest = {
  title?: string;
  description?: string;
  status?: 'pending' | 'completed';
  completionMessage?: string;
};
