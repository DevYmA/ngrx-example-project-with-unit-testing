import * as customerReducer from "./customer.reducer";
import * as customerSelector from "./customer.selector";

describe('Customer Feature Selector :', () => {

    describe('Select All Customers', () => {
        it('Should load all customers', () => {

            const initialState: customerReducer.CustomerState = {
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

            const result = customerSelector.getAllCustomers.projector(initialState);
            expect(result.length).toEqual(2);

        });
    });
});