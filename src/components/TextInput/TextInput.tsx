import type { TextInputProps } from "../../types";

export default function TextInput(props: TextInputProps) {
    return (
        <textarea
            placeholder={props.placeholder}
            defaultValue={props.initialValue}
            onChange={(event) => props.onTextChange(event.target.value)}

        />
    );

}