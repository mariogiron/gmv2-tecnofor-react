import { MouseEvent } from "react";

type CustomButtonProps = { manejaClick: (event: MouseEvent) => void }

const CustomButton = ({ manejaClick }: CustomButtonProps) => {
    return <button onClick={manejaClick}>Pulsa el botón</button>;
}

export default CustomButton;