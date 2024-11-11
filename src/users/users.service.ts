import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   age?: number;
//   role: 'Admin' | 'Engineer' | 'Intern';
// }
@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'AG',
      email: 'aa@example.com',
      age: 39,
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Malik',
      email: 'malik@example.com',
      age: 38,
      role: 'Admin',
    },
    {
      id: 3,
      name: 'Aisha',
      email: 'aisha@example.com',
      age: 37,
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Ahmed',
      email: 'ahmed@example.com',
      age: 36,
      role: 'Admin',
    },
    {
      id: 5,
      name: 'Fatima',
      email: 'fatima@example.com',
      age: 39,
      role: 'Engineer',
    },
    {
      id: 6,
      name: 'Zain',
      email: 'zain@example.com',
      age: 38,
      role: 'Engineer',
    },
    {
      id: 7,
      name: 'Sara',
      email: 'sara@example.com',
      age: 37,
      role: 'Engineer',
    },
    {
      id: 8,
      name: 'Omar',
      email: 'omar@example.com',
      age: 39,
      role: 'Intern',
    },
    {
      id: 9,
      name: 'Layla',
      email: 'layla@example.com',
      age: 38,
      role: 'Intern',
    },
    {
      id: 10,
      name: 'Hassan',
      email: 'hassan@example.com',
      age: 37,
      role: 'Intern',
    },
  ];
  findAll(role?: 'Admin' | 'Engineer' | 'Intern', age?: number) {
    return this.users.filter((user) => {
      const matchRole = role ? user.role == role : true;
      const matchAge = age ? user.age == age : true;
      return matchAge && matchRole;
    });
  }
  findAllInterns() {
    return this.users.filter((user) => user.role == 'Intern');
  }
  findOne(id: number) {
    return this.users.filter((user) => user.id == id);
  }
  create(newUser: User) {
    // const id = this.users.length + 1;
    const heighestUserId = [...this.users].sort((a, b) => b.id - a.id);
    const id = heighestUserId[0].id + 1;
    newUser = { id, ...newUser };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, userUpdate: User) {
    if (id) {
      //   const userIndex = this.users.findIndex((user) => user.id == id);
      //   if (userIndex !== -1) {
      //     this.users[userIndex] = {
      //       ...this.users[userIndex],
      //       ...userUpdate,
      //     };
      //     return this.users[userIndex];
      //   } else {
      //     return `User not found, wrong id ${id}`;
      //   }
      this.users = this.users.map((user) => {
        if (user.id == id) {
          return { ...user, ...userUpdate };
        } else {
          return user;
        }
      });
      return this.findOne(id);
    } else {
      return `User not found`;
    }
  }
  delete(id: number) {
    if (id) {
      //   const userIndex = this.users.findIndex((user) => user.id == id);
      //   if (userIndex !== -1) {
      //     this.users.splice(userIndex, 1);
      //   } else {
      //     return `User not found, wrong id ${id}`;
      //   }
      const removedUser = this.findOne(id);
      this.users = this.users.filter((user) => user.id != id);
      return removedUser;
    } else {
      return `User not found`;
    }
  }
}
