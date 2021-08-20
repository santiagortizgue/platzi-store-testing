import { test } from '@jest/globals';
import reducer from '../../reducers/';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', ()=>{
    test('Retornar initial state', () => {
        expect(reducer({}, '')).toEqual({});
    });

    test('ADD_TO_CART', () => {
        const initialState = {
            cart: [],
        }
        const payload = ProductMock;
        const action = {
            type: "ADD_TO_CART",
            payload
        }

        const expedted = {
            cart: [ProductMock]
        }
        expect(reducer(initialState, action)).toEqual(expedted);
    });
});