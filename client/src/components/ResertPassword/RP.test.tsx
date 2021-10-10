import { render, screen } from "@testing-library/react";

import ResertPassword from './ResertPassword'

describe('Notes component', () => {
    test('Notes renders', () => {
        // render(<ResertPassword />)

        expect(screen.getAllByText('ResertPassword'))

    })
})