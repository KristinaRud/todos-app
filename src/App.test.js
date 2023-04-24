import {render} from '@testing-library/react'
import App from "./App";
import ToDoProvider from "./context";


describe('snapshot App', ()=>{
    test('snapshot App', ()=>{

        const app = render(
            <ToDoProvider>
            <App/>
            </ToDoProvider>);
        expect(app).toMatchSnapshot();
    })
})
