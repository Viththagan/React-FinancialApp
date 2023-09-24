import { CardPortfolio } from "../CardPortfolio/CardPortfolio";
import { v4 as uuidv4 } from "uuid";

interface Props {
    portfolioValues: string[];
    onPortfolioDelete(e:  React.FormEvent<HTMLFormElement>): void;
}

export const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return <div>
        <h2>My Portfolio</h2>
        <ul>
            {portfolioValues &&
                portfolioValues.map((portfolioValue) =>
                    <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} key={uuidv4()} />)
            }
        </ul>
    </div>
}