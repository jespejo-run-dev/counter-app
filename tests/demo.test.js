
describe('Pruebas en DemoTest', () => {

    test('Esta prueba no debe de fallar', () => {

        // 1. Inicialización
    
        const message1 = 'Hola Mundo'
    
        // 2. Escenario (Input)
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento esperado
        expect(message1).toBe(message2);
    
    });
    
})



