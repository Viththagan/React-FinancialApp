// import { useEffect } from "react";

interface Props {
    onChange (e: React.ChangeEvent<HTMLInputElement>): void;
    onClick (e: React.MouseEvent<HTMLButtonElement>): void;
    search: string | undefined;
};

export const Search = ({onChange, onClick, search}: Props): JSX.Element => {
    
    // useEffect(() => console.log(search), [search]);

    return <div>
        <input value={search} type="text" onChange={onChange} />
        <button onClick={onClick}>Search</button>
    </div>
}