import {useState} from "react";

const useToggle = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue)

    const toggle = () => setValue(!value);

    return [value, toggle] as const;
}

export {useToggle};