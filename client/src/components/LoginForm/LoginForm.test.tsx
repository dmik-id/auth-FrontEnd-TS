import { render, screen } from "@testing-library/react";
import { debug } from "console";

import LoginForm from "./LoginForm";

describe('LoginForm component', () => {
    test('LoginForm renders', () => {
        render(<LoginForm />)


        // screen.debug()
        expect(screen.getByRole('link')).toBeInTheDocument
        expect(screen.getByText('Логин')).toBeInTheDocument
        expect(screen.getByText('Регистрация')).toBeInTheDocument
        expect(screen.getByText('resertpassword')).toBeInTheDocument
        
        // expect(screen.getByRole('button')).toBeInTheDocument
    })
})