import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../Components/App';

describe ("App", () => {
    const {asFragment} = render (<App/>);

    it("renders App Correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});
