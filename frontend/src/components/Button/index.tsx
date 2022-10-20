import { StyledButton } from "./styles";


type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    size?: "default" | "small";
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
    label = "",
    variant = "primary",
    size = "default",
    onClick,
    type,
  }) => {
    return (
      <StyledButton type={type} onClick={onClick} variant={variant} size={size}>
        <span>{label}</span>
      </StyledButton>
    );
  };

  export default Button;



