'use client';

import { useState, useEffect } from 'react';
import BudgetCalculatorModal from './BudgetCalculatorModal';
import { useScrollTrigger } from '@/hooks/useScrollTrigger';

export default function BudgetCalculatorWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = useScrollTrigger();

  useEffect(() => {
    if (showModal) {
      setIsModalOpen(true);
    }
  }, [showModal]);

  return (
    <BudgetCalculatorModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
  );
} 