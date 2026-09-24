import React from 'react';
import { Certifications } from '../components/Certifications';
import { Achievements } from '../components/Achievements';
import { CodingDSA } from '../components/CodingDSA';

export const CertificationsPage: React.FC = () => {
  return (
    <main>
      <Certifications />
      <Achievements />
      <CodingDSA />
    </main>
  );
};
