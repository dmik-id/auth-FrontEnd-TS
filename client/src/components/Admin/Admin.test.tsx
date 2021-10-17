import { render, screen } from "@testing-library/react";

import Admin from "./Admin";

describe('Admin component', () => {
    test('Admin renders', () => {
        render(<Admin />)


        screen.debug()
        expect(screen.getByText('ADMIN')).toBeInTheDocument
        expect(screen.getAllByText(/ADD ROLE TO USER/)).toBeInTheDocument
        expect(screen.getByText('ADDROLE')).toBeInTheDocument

        // expect(screen.getByAltText('ADD'))
    })
})