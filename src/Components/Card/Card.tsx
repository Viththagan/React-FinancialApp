import { CompanySearch } from "../../customData";
import { AddPortfolio } from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css";

interface Props {
    company: CompanySearch;
    onPortfolioCreate(e: React.FormEvent<HTMLFormElement>): void;

}
export const Card = ({ company, onPortfolioCreate }: Props) => {
    return <div className="product-card">
        <div className="details">
            <h2>{company.name}</h2>
            <p>{company.exchangeShortName}</p>
            <p>{company.currency}</p>
            <p>{company.stockExchange}</p>
            <p>{company.symbol}</p>
        </div>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={company.symbol} />
    </div>;
}

