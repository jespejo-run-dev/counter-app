import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
  
    test('getImagen debe retornar un error si no tenemos apikey', async() => {
    
        const url = await getImagen();    

        // expect(typeof url).toBe('string');

        expect(url).toBe('No se encontro la imagen');
        

    });
    
});
