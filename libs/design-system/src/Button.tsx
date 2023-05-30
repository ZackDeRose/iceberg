export interface ButtonProps {
  type: 'primary' | 'secondary';
  children?: React.ReactNode;
}

const defaultProps: ButtonProps = {
  type: 'primary',
};

export function Button({
  type,
  children,
}: ButtonProps = defaultProps) {
  return (
    <button className={type === 'primary' ? 'blue' : 'red'}>
      {children}
    </button>
  );
}
