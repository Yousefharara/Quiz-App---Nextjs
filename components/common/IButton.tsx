import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?:() => void;
    icon?: ReactNode;
    variant?: 'default' | 'outline' | 'danger'
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?:boolean;
}



const IButton = ({
    children,
    onClick,
    icon,
    variant = "default",
    size = "md",
    className,
    disabled = false,

} : ButtonProps) => {

    const baseStyles = 'inline-flex items-center justify-center rounded-md font-normal transition-colors';

    const variantStyles = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    };
  
    const sizeStyles = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            onClick={onClick}
            className={cn(  
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                disabled && 'opacity-50 cursor-not-allowed',
                className, ""
            )}
            disabled={disabled}
        >
            {icon && <span className='mr-2'>{icon}</span>}
            {children}
            
        </button>
    );
}

export default IButton;
