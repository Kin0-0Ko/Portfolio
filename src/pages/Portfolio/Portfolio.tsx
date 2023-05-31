import React, { FC } from 'react';
import styles from './Portfolio.module.sass';

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => (
  <div className={styles.Portfolio} data-testid="Portfolio">
    Portfolio Component
  </div>
);

export default Portfolio;
