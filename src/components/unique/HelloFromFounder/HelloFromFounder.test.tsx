
import { render, screen } from '@testing-library/react'
import HelloFromFounder from './HelloFromFounder'
import { userEvent } from '@testing-library/user-event'
import { describe, it } from 'vitest';

describe('HelloFromFounder', () => {
const renderComponent = () => {
    render(
        <HelloFromFounder />
    )
    const user = userEvent.setup()

    return {
        user: user,
    }
}
it('should', async () => {
    const {user} = await renderComponent()
})

})
