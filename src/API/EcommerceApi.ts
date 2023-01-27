import { featuredProductLPObj, IProduct, IUser } from "../../interfaces/models";
import { IGetFeaturedProductResponse, ILoginResponse } from "../../interfaces/response";
import { callFetch } from "../utils/CallFetch";
import { CookiesHandler } from "../utils/CookiesHandler";

// import { callFetch, MyFetchInterface } from "../utils/CallFetch"
export const API_ENDPOINT = process.env['NEXT_PUBLIC_API_ENDPOINT']

export interface LoginInterface {
    status: number
    data: {
        access_token: string | null
    }
}

export class EcommerceApi {
    //DEMO API CALLING STRUCTURE
    static async login(data: Partial<IUser>): Promise<ILoginResponse> {
        console.log(data.token);
        console.log(API_ENDPOINT)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
        };

        return await callFetch(`${API_ENDPOINT}/users/login`, requestOptions)
    }

    static async getThreeFeaturedProducts(featuredProductLP:featuredProductLPObj): Promise<IGetFeaturedProductResponse> {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", `Bearer ${CookiesHandler.getAccessToken()}`);
        const requestOptions = {
            method: 'GET',
            // headers: myHeaders,
            redirect: 'follow'
        };
        return await callFetch(`${API_ENDPOINT}/products?page=${featuredProductLP.pageNumber}`, requestOptions)
    }
}