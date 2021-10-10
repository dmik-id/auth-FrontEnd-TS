import { render, screen } from "@testing-library/react";

import UserList from './UserList'

describe('Notes component', () => {
    test('Notes renders', () => {
        render(<UserList />)

        expect(screen.getByText('UserList'))
        screen.getByRole('button')
        // screen.getByRole('list')
    })
})