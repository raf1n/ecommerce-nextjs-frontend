import { state, action, createStore } from 'usm-redux';
import { compose } from 'redux';
import { IProduct } from '../../interfaces/models';


const composeEnhancers =
    // @ts-ignore
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Speciffy extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

export interface IStates {
    counter: number
    wishlistCounter: number
    wishlistData: Array<IProduct>
    toggle: Boolean
    allProducts: Array<IProduct>
}

export class Controller {
    @state
    states: IStates = {
        counter: 0,
        wishlistCounter: 0,
        wishlistData: [],
        toggle: false,
        allProducts: [],
    }

    @action
    setState(states: Partial<IStates>) {
        this.states = {
            ...this.states,
            ...states
        }
    }

    @action
    setAllProducts(product: Array<IProduct>) {
        this.states.allProducts = product
    }

    @action
    setIncreaseWishlistCounter() {
        this.states.wishlistCounter += 1;
    }


    @action
    setAddtoWishlist(product: IProduct) {
        if (!this.states.wishlistData.some((item) => item.slug === product.slug)) {
            this.states.wishlistCounter += 1;
            this.states.wishlistData = [
                ...this.states.wishlistData,
                product
            ]
            // this.states.wishlistData.push(product)
        }
        else {
            this.states.wishlistData = this.states.wishlistData.filter((item) => item.slug !== product.slug)
            this.states.wishlistCounter -= 1
        }
    }

    @action
    setClearWishlist() {
        this.states.wishlistData = [];
        this.states.wishlistCounter = 0
    }

    @action
    setRemoveWishlistSingleProduct(product: IProduct) {
        this.states.wishlistData = this.states.wishlistData.filter((item) => item.slug !== product.slug)
        this.states.wishlistCounter -= 1
    }

}

export const controller = new Controller();

export const store = createStore(
    {
        modules: [controller],
    },
    undefined,
    {
        reduxEnhancer: composeEnhancers(),
    }
);