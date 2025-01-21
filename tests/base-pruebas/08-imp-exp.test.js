import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
  
    test('getHeroeById debe retornar un heroe por ID', () => {
      
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1, name: 'Batman', owner: 'DC' 
        });

    });

    test('getHeroeById debe retornar undefined si no existe el ID', () => {
      
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();

    });

    test('getHeroesByOwner debe retornar un arreglo con heroes de DC ', () => {
        
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        
        expect(hero.length).toBe(3);
        
        expect(hero).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );
        
        expect(hero).toEqual(heroes.filter(hero => hero.owner === owner));

    });

    test('getHeroesByOwner debe retornar un arreglo con heroes de Marvel ', () => {
        
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        
        expect(hero.length).toBe(2);
        
        expect(hero).toEqual(heroes.filter(hero => hero.owner === owner));

    });
    
    

});
