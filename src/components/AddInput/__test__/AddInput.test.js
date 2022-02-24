import {render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const  mockedSetTodo = jest.fn();

describe("AddInput",  () => {
    it('test function add', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: {value: "Go Grocery Shopping"}});
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it("input should have empty when add button is click",  async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", {name: /Add/i});
        fireEvent.change(inputElement, {target: {value : "go to Grocery store"}});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    })
})
