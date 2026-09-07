import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#5C7C93] focus-visible:outline-offset-2";

  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-6 py-3.5 rounded-[2px] shadow-sm font-semibold tracking-wide hover:shadow-md active:translate-y-[1px]";
  } else if (variant === 'secondary') {
    variantClasses = "border border-[#28323C] hover:border-[#5C7C93] text-[#EFEAE2] px-6 py-3.5 rounded-[2px] bg-transparent hover:bg-[#28323C]/30";
  } else if (variant === 'link') {
    variantClasses = "text-[#EFEAE2] hover:text-[#5C7C93] underline underline-offset-8 decoration-1 decoration-[#EFEAE2] hover:decoration-[#5C7C93] p-0 bg-transparent";
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
