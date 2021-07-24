import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Customer } from '../customer.model';
import { loadCustomers, loadCustomersSuccess } from './customer.action';
import * as customerReducer from './customer.reducer';

describe('Customer Reducer', async () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormBuilder],
            providers: [provideMockStore({})],
        });
    });

    describe('init action', () => {
        it('should return the default state', () => {
            const { initialState } = customerReducer;
            const action = {
                type: 'Unknown'
            };
            const state = customerReducer.customerReducer(initialState, action);
            expect(state).toBe(initialState);
        });
    });

    describe('customerLoadedSuccess', () => {
        it('should be update state immutably', () => {
            const { initialState } = customerReducer;
            const newData: Customer[] = [
                {
                    "name": "Jon Doe",
                    "phone": "4564564567",
                    "address": "458 Go Street",
                    "memebership": "Silver",
                    "id": 1
                },
                {
                    "name": "Rick Gremy",
                    "phone": "895248854",
                    "address": "785 Flower Street",
                    "memebership": "Gold",
                    "id": 2
                }
            ];

            const expectedState: customerReducer.CustomerState = {
                ids: [1, 2],
                entities: {
                    1: {
                        "name": "Jon Doe",
                        "phone": "4564564567",
                        "address": "458 Go Street",
                        "memebership": "Silver",
                        "id": 1
                    },
                    2: {
                        "name": "Rick Gremy",
                        "phone": "895248854",
                        "address": "785 Flower Street",
                        "memebership": "Gold",
                        "id": 2
                    }
                },
                customerLoaded: true,
                customerLoading: false,
                error: ''
            };


            const action = loadCustomersSuccess({ customers: newData });
            const state = customerReducer.customerReducer(initialState, action);
            
            expect(state).toEqual(expectedState);
            expect(state).not.toBe(expectedState);
            expect(state).not.toEqual(initialState);
        });
    });
});