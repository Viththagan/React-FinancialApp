import './App.css';
import { useEffect, useState } from 'react';
import { Cardlist } from './Components/Cardlist/Cardlist';
import { Search } from './Components/Search/Search';
import { apiKey, searchCompanies } from './api';
import { CompanySearch } from './customData';
import { ListPortfolio } from './Components/Portfolio/ListPortfolio/ListPortfolio';


function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    }
    else if (Array.isArray(result)) {
      setSearchResult(result);
    }
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exist = portfolioValues.find((portfolioValue) => portfolioValue === e.target[0].value);
    if (exist) return;
    const updatedPortfolioValues = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolioValues);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const updatedPortfolioValues = portfolioValues.filter((portfolioValue) => portfolioValue !== e.target[0].value);
    setPortfolioValues(updatedPortfolioValues);
  }

  useEffect(() => {
    console.log(`Search result: ${JSON.stringify(searchResult)}`);
    console.log(`Server Error: ${serverError}`);
  }, [searchResult, serverError]);
  // console.log(`API_KEY: ${apiKey}`);

  return (
    <>
      <Search onChange={onChange} onClick={onClick} search={search} />
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      <Cardlist companyList={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </>
  )
}

export default App;
