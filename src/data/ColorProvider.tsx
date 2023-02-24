import {useState} from "react";
import {colorListData} from "./ColorListData";
import {v4} from "uuid";
import { ColorContext } from "..";

interface IProps {
    children: any
}

export default function ColorProvider ({ children }: IProps) {
    const [colors, setColors] = useState({ ...colorListData});
    const addColor = (title: string, color: string) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);
    const rateColor = (id: string, rating: number) =>
        setColors(
            colors.map(color => (color.id === id ? { ...color, rating } : color))
        );
    const removeColor = (id: string) => setColors(colors.filter(color => color.id !== id));
    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    );
};