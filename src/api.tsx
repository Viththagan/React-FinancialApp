import axios, { AxiosResponse } from "axios";
import { CompanySearch } from "./customData";

export const apiKey = import.meta.env.VITE_REACT_APP_FINANCIAL_API_KEY;

// export interface CompanySearch[] {
//     data: CompanySearch[];
// }

export const searchCompanies = async (query: string): Promise<CompanySearch[] | string> => {
    try {
        const response: AxiosResponse<CompanySearch[]> = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`);
        return response.data;

    }
    catch (error) {
        return (axios.isAxiosError(error)) ? `Axios error: ${error.message}` : 'An unexpected error has occured';

    }

}