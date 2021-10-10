import { render, screen } from "@testing-library/react";

import Landing from "./Landing";

describe('List component', () => {
    test('List renders', () => {
        render(<Landing />)

        expect(screen.getByText('Landing'))
    })
})