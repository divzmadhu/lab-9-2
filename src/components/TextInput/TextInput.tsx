import type { TextInputProps } from "../../types";

export default function TextInput(props: TextInputProps) {
    return (
        <textarea
  
            placeholder={props.placeholder ?? "Start typing your text here..."}
            defaultValue={props.initialValue}
            onChange={(event) => props.onTextChange(event.target.value)}

        />
    );

}