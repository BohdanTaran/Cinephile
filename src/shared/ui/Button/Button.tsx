import primaryStyles from './ButtonPrimary.module.css';
import { ButtonProps } from './model/types';

const styleMap = {
  primary: primaryStyles.button,
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  style = 'primary',
  disabled = false,
}) => {
  const buttonClass = `${styleMap[style]}`;

  return (
    <button className={buttonClass} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
