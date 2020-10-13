import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';

test("weather render sunny", async () => {
    const { findByRole } = render(<Weather temperature={10} state={"Clear"}></Weather>)
    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
})