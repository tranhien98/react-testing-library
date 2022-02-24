import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Todo from '../Todo';

const MockComponent = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}


const addTask = (task) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i});
    task.forEach(element => {
        fireEvent.change(inputElement, {target: { value: task }});
        fireEvent.click(buttonElement);
    });
}


describe("Todo", () => {
    it('should render same text passed into title props', () => {
        render(
            <MockComponent/>
        );
        addTask(["Go to Grocery Shopping"]);
        const divElement = screen.getByText(/Go to Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    } );

    it("should render multiple item", () => {
        render(
            <MockComponent/>
        );
        addTask(["go to play", "go to play", "go to play"]);
        const divElement = screen.queryAllByText(/go to play/i);
        expect(divElement.length).toBe(3);
    });

    it("task should not have complete class when initally render", () => {
        render(
            <MockComponent/>
        );
        addTask(["this is new task"]);
        const divElement =screen.getByText(/this is new task/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    })

    it('task should have complete class when user click', () => {
        render(
            <MockComponent/>
        );
        addTask(['this is new task to add']);
        const divElement = screen.getByText(/this is new task to add/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    })
})