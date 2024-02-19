import { ChangeEventHandler } from "react";

type CustomInputProps = { type?: string, value: string, name: string, onChange: ChangeEventHandler, label?: string }

const CustomInput = ({ type = 'text', value, name, onChange, label }: CustomInputProps) => {

    return <div>
        <label>{label || name}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
    </div>
}

export default CustomInput;