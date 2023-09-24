interface Props {
    onPortfolioDelete(e:  React.FormEvent<HTMLFormElement>): void;
    portfolioValue: string;
}

export const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
    return <div>
        <form onSubmit={onPortfolioDelete}>
            <input id="delete" name="deleteInput" readOnly={true} hidden={true} value={portfolioValue} />
            <button type="submit">Delete</button>
        </form>
    </div>
}