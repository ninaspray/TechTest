import React from 'react';
import { render } from "@testing-library/react";
import Searchresult from '../Components/searchResults';

describe("Search Result", () => {
    const { asFragment } = render(<Searchresult />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});