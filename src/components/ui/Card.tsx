import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <div className={`card ${hoverable ? 'hoverable-card' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
};
