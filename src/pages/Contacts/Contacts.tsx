import React, { FC } from 'react';
import styles from './Contacts.module.sass';

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => (
  <div className={styles.Contacts} data-testid="Contacts">
    Contacts Component
  </div>
);

export default Contacts;
