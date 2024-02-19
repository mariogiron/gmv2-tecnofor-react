import { ChangeEvent, ChangeEventHandler, useState } from "react";

type FieldsType = {
    [key: string]: string
}

// const useFormFields = (initialState: FieldsType): [FieldsType, ChangeEventHandler] => {
function useFormFields(initialState: FieldsType): [FieldsType, ChangeEventHandler] {

    const [fields, setFields] = useState(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })
    }

    return [fields, handleChange];

}

export default useFormFields;