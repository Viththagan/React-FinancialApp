interface Props {
    onPortfolioCreate: React.FormEventHandler<HTMLFormElement>;
    symbol: string;
}

export const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return <div>
        <form onSubmit={onPortfolioCreate}>
            <input readOnly={true} hidden={true} value={symbol} />
            <button type="submit">Add</button>
        </form>
    </div>
}