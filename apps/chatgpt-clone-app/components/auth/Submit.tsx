import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";

const Submit = ({ children, ...others }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} {...others}>
      {children}
    </Button>
  );
}

export default Submit;