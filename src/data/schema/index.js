import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Todo {
    id: Int!
    text: String
  }

  # the schema allows the following query:
  type Query {
    todos(id: Int!): [Todo]
  }

  # this schema allows the following mutation:
  type Mutation {
    changeTodo (
      text: String
    ): Todo
  }
`;

const todos = [
  {
    id: 1,
    text: 'pooper',
  },
  {
    id: 2,
    text: 'scooper',
  },
];

const resolvers = {
  Query: {
    todos: (_, { id }) => todos.find(todo => todo.id === id),
  },
  Mutation: {
    changeTodo: (_, { id }) => {
      const todo = todos.find(todo => todo.id === id);
      if (!todo) {
        throw new Error(`Couldn't find todo with id ${id}`);
      }
      todo.text += ' u mutated me again';
      return todo;
    },
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
