import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"
import Followers from "../../Followers/Followers"


const MockTodoFollowers = () => {
    return (
        <BrowserRouter>
            <Followers/>
        </BrowserRouter>
    )
}


it("component should render list with no props", () => {
    render(
        <MockTodoFollowers />
    );
    const textInComponent = screen.getByText(/go back/i);
    expect(textInComponent).toBeInTheDocument();
})