const db: Map<string, Todo[]> = new Map();

interface Todo {
    id: string;
    description: string;
    done: boolean;
}

export function getTodos(userid: string): Todo[] {
    if (!db.get(userid)) {
        db.set(userid, [{
            id: crypto.randomUUID(),
            description: 'Learn SvelteKit',
            done: false
        }]);
    }

    return db.get(userid)!; // We can safely access the value because we know it exists
}

export function createTodo(userid: string, description: string): void {
    if (description === '') {
        throw new Error('todo must have a description');
    }

    const todos = db.get(userid);

    if (todos?.find((todo) => todo.description === description)) {
        throw new Error('todos must be unique');
    }

    if (!todos) {
        db.set(userid, []); // Initialize an empty array if no todos exist for the user
    }

    todos!.push({
        id: crypto.randomUUID(),
        description,
        done: false
    });
}

export function deleteTodo(userid: string, todoid: string): void {
    const todos = db.get(userid);

    if (!todos) {
        return; // No todos for the user, nothing to delete
    }

    const index = todos.findIndex((todo) => todo.id === todoid);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}


export function get(userid: string) {
    throw new Error("Function not implemented.");
}
