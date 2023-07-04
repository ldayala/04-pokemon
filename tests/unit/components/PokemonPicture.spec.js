import { shallowMount } from "@vue/test-utils";
import PokemonPicture from "@/components/PokemonPicture";
describe('PokemonPicture componet', () => {
    
    test('Debe hacer match con el snapshot', () => {
        const wrapper= shallowMount(PokemonPicture,{
            props:{
                pokemonId:1,
                showPokemon:false
            }
        })
        expect(wrapper.html).toMatchSnapshot()
    });


    test('Debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper= shallowMount(PokemonPicture,{
            props:{
                pokemonId:100,
                showPokemon:false
            }
        })
        const[img1,img2]= wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()

        expect(img2).toBe(undefined)

        //verificamos que la imagen una tenga la clase hidden-pokemon
        expect(img1.classes('hidden-pokemon')).toBe(true)
        expect(img1.attributes().src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
        
    });

    test('Debe mostrar la imagen del pokemon si showPokemon:true', () => {
        const wrapper= shallowMount(PokemonPicture,{
            props:{
                pokemonId:100,
                showPokemon:true
            }
        })
        const[img1,img2]= wrapper.findAll('img')
        
        expect(img1.exists()).toBeTruthy()

        expect(img2.exists()).toBeTruthy()

        //verificamos que la imagen una tenga la clase hidden-pokemon
        expect(img2.classes('fade-in')).toBe(true)
    });
});