import React from 'react';
import { Contact } from '../components/Contact';
import { Resume } from '../components/Resume';

export const ContactPage: React.FC = () => {
  return (
    <main>
      <Contact />
      <Resume />
    </main>
  );
};
