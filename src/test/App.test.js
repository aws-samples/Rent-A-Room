import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.js';

describe('App tests', () => {
    it('should contain the paragraph', () => {
        render(<App />);
        const paragraph = screen.getByText(/Travel Like A Nomad/);
        expect(paragraph).toBeInTheDocument();
    });
});