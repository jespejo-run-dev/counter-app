import { render } from "@testing-library/react";
import { FristApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
    test('Debe hacer match con el snapshot', () => {
        
        const title="Hola, Jespejo";
        const {container} = render(<FristApp title={title} />)

        expect(container).toMatchSnapshot();
        
        
    });
    
    test('debe mostrar el titulo en un h1', () => {
        const title="Hola, Jespejo";
        const {container, getByText} = render(<FristApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        

    })
    

});
