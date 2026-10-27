import type { TextInputProps } from "../../types";

export default function TextInput(props: TextInputProps) {
    return (
        <textarea
            // makes the text area approximately five lines tall initially.
            // rows={5}
            // columns ={50}
            placeholder={props.placeholder ?? "Start typing your tesxt here..."}
            defaultValue={props.initialValue}
            onChange={(event) => props.onTextChange(event.target.value)}

        />
    );

}