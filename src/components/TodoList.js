import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
                )
            )
        }
    </ul>
);

TodoList.prototype = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            complete: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList
