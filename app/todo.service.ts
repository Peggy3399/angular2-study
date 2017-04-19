import { Injectable} from '@angular/core';

import { Todo } from './todo';

const TODOLIST: Todo[] = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' }
]

@Injectable()
export class TodoService {
    getTodoList(): Promise<Todo[]> {
        return Promise.resolve(TODOLIST);
    }
    getTodoById (id: number): Promise<Todo> {
        return this.getTodoList()
        .then(todoList => todoList.find(todo => todo.id === id));
    }
}

