import { Injectable} from '@angular/core';

import { Todo } from './todo';

const TODOLIST: Todo[] = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' }
]

const TODOLIST2: Todo[] = [
    { id: 5, name: 'Rose' },
    { id: 6, name: 'Peggy' },
    { id: 7, name: 'Tom' },
    { id: 8, name: 'Jack' }
]

@Injectable()
export class TodoService {
    getTodoList(): Promise<Todo[]> {
        return Promise.resolve(TODOLIST);
    }
    getTodoList2(): Promise<Todo[]> {
        return Promise.resolve(TODOLIST2);
    }
    getTodoById (id: number): Promise<Todo> {
        return this.getTodoList()
        .then(todoList => todoList.find(todo => todo.id === id));
    }
}

