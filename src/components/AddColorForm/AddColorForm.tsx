import React, {FormEvent} from 'react';
import {useInput} from "../../hooks/useInput";

interface IProps {
    onNewColor: (title: string, color: string) => any,
}

const AddColorForm = ({ onNewColor }: IProps) => {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e: FormEvent) => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...colorProps}
                type="color"
                required
            />
            <button>Add</button>
        </form>
    );
};

export default AddColorForm;