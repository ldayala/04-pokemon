import { shallowMount } from "@vue/test-utils";
import PokemonOptions from '@/components/PokemonOptions'
import { mockPokemon } from "../mocks/pokemons.mock";


describe('PokemonOptions Componet', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemon
            }
        })
    })
    test('Debe hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Debe de mostrar las 4 opciones correctamente', () => {
        const liTags = wrapper.findAll('li')
        //debe tener 4 li 
        expect(liTags.length).toBe(4)
        //cada li debe tener su nomnbre del pokemon
        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')

    });

    test('Debe emitir "selection" con sus respectivos valores al hacer clic', () => {
       
        const [li1,li2,li3,li4]=wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        //verificamos que se hay emitido 4 veces el evento
        expect(wrapper.emitted('selection').length).toBe(4);

        //verificamos que en cada evento se emita el id correcto
       expect(wrapper.emitted('selection')[0]).toEqual([1])
       expect(wrapper.emitted('selection')[1]).toEqual([2])
       expect(wrapper.emitted('selection')[2]).toEqual([3])
       expect(wrapper.emitted('selection')[3]).toEqual([4])
    });
});