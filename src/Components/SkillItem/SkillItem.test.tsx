import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkillItem from './SkillItem';

describe('<SkillItem />', () => {
  test('it should mount', () => {
    render(<SkillItem name='kkk' level={5} image='kl'/>);
    
    const skillItem = screen.getByTestId('SkillItem');

    expect(skillItem).toBeInTheDocument();
  });
});