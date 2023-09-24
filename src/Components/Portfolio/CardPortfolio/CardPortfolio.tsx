import { DeletePortfolio } from "../DeletePortfolio/DeletePortfolio";

interface Props {
    portfolioValue: string;
    onPortfolioDelete(e:  React.FormEvent<HTMLFormElement>): void;
}

export const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
    return <div>
        <h3>{portfolioValue}</h3>
        <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
    </div>
}