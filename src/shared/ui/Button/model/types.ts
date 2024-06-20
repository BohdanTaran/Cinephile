export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button';
  style?: 'primary';
  disabled?: boolean;
}
