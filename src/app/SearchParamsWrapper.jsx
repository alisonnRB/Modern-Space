'use client';

import { Suspense } from 'react';

export default function SearchParamsWrapper({ children }) {
  return <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>;
}