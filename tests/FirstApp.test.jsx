import { render } from "@testing-library/react";
import { FristApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
    // test('Debe hacer match con el snapshot', () => {
        
    //     const title="Hola, Jespejo";
    //     const {container} = render(<FristApp title={title} />)

    //     expect(container).toMatchSnapshot();
        
        
    // });
    
    test('debe mostrar el titulo en un h1', () => {
        const title="Hola, Jespejo";
        const {container, getByText, getByTestId} = render(<FristApp title={title} />)

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);

    })


    test('debe mostrar el subtitulo enviado por props', () => {
        const title="Hola, Jespejo";
        const subTitle="Soy un subtitulo";
        const {getByText, getAllByText} = render(
            <FristApp 
                title={title} 
                subTitle={subTitle}
            />
        );

        expect(getAllByText(subTitle).length).toBe(2);
    })
    
    

});
