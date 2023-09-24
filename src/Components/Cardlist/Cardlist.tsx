import "./Cardlist.css";
import { Card } from "../Card/Card";
import { CompanySearch } from "../../customData";
import { v4 as uuidv4 } from "uuid";

interface Props {
    companyList: CompanySearch[];
    onPortfolioCreate(e: React.FormEvent<HTMLFormElement>): void;
}

export const Cardlist = ({ companyList, onPortfolioCreate }: Props) => {

    // const list: JSX.Element = <>  </>;
    return <div className="product-grid">
        {companyList.length > 0 ? (
            companyList.map((company) =>
                <Card
                    key={uuidv4()}
                    company={company}
                    onPortfolioCreate={onPortfolioCreate}
                />
            )
        ) : (
            <p>No results</p>
        )
        }
    </div>
}

// export default Cardlist;