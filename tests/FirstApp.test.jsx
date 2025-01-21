import { render } from "@testing-library/react";
import { FristApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
    test('Debe hacer match con el snapshot', () => {
        
        const title="Hola, Jespejo";
        render(<FristApp title={title} />)
        
    });
    
});
