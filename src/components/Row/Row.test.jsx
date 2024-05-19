import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react'

import { Row } from './Row';

describe('Row Component', () => {
  it('should render the title "Acumulado Grillas"', () => {
    render(<Row />);
    expect(screen.getByText('Acumulado Grillas')).toBeInTheDocument();
  })
})  