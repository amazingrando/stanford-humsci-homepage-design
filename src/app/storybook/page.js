'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StorybookPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the actual Storybook index.html
    window.location.href = '/storybook/index.html';
  }, []);

  return null;
} 