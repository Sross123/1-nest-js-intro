export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'John', age: 25, gender: 'male', isMarried: false },
    { id: 2, name: 'Jane', age: 30, gender: 'female', isMarried: true },
    { id: 3, name: 'Jack', age: 20, gender: 'male', isMarried: false },
    { id: 4, name: 'Jill', age: 28, gender: 'female', isMarried: true },
    { id: 5, name: 'Jake', age: 35, gender: 'male', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
