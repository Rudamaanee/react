import React from 'react';
type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends ButtonTypes {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, children, ...props }, ref?: React.Ref<HTMLButtonElement>) => {
   
    const classNames = [className, 'btn'].filter(v => Boolean(v)).join(' ') || undefined;

    return (
      <button ref={ref} className={classNames} onClick={onClick} {...props}>
        {children}
      </button>
    );
  },
);
export default CustomButton;