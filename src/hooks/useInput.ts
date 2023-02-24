import {useState} from "react";

export const useInput = (initialValue: string): any => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: (e: any) => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
}