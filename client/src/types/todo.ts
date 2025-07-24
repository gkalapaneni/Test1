export interface ApiTodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  completionMessage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
  completionMessage?: string;
}

export type FilterType = 'all' | 'completed' | 'pending';
