<<<<<<< HEAD
import { Grid, GridItem, Text, Todo } from 'components';

export const TodoList = () => {
  const todos = [];
  const deleteTodo = [];
  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                text={todo.text}
                counter={index + 1}
                onClick={deleteTodo}
              />
            </GridItem>
          ))}
      </Grid>
      ;
=======
import { useSelector } from 'react-redux';

import { Grid, GridItem, Todo, Text } from 'components';
import { getAllTodos } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(getAllTodos);

  return (
    <>
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
      </Grid>

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
    </>
  );
};
