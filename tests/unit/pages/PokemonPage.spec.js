import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { mockPokemon } from "../mocks/pokemons.mock";

describe('PokemonPage Component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
        // ai usaramos el spy aqui arriba tambien tendriamos que hacer limpieza
    })

    test('debe hacer match con el snapshot ', () => {

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe llamar a mixPokemonArray al montar', () => {
        //espiamos de obejot PokemoPage.methods el metodo  mixPokemonArray para ver si se llama
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        //montamos el componente para ver si llama al metodo
        shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    });

    test('debe hacer match con el snapshot cuando cargan los pokemons', () => {

        const wrapperw = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr:mockPokemon,
                    pokemon: mockPokemon[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                    vidas: 5,
                    puntos: 0,
                    btnValue: "Avanzar",
                }
            }
        })

        expect(wrapperw.html()).toMatchSnapshot()
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper= shallowMount(PokemonPage,{
            data() {
                return {
                    pokemonArr:mockPokemon,
                    pokemon: mockPokemon[0],
                    showPokemon: true,
                    showAnswer: false,
                    message: "",
                    vidas: 5,
                    puntos: 0,
                    btnValue: "Avanzar",
                }
            }
        })
        //pokemonPicture debe existir
        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
        //PokemonOptions debe existir
        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()
        //pokemonPicture  attribute pokemonId===1
        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe("1")
        //PokemonOptions attribute pokemons exista
        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()
    });

    test('pruebas con checkanswer', async() => {
        const wrapper= shallowMount(PokemonPage,{
            data() {
                return {
                    pokemonArr:mockPokemon,
                    pokemon: mockPokemon[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                    vidas: 5,
                    puntos: 0,
                    btnValue: "Avanzar",
                }
            }
        })
        //await porque se renderiuza el dom en dependencia de este metdodo llamado
         await   wrapper.vm.getAnswer(1)
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.vm.showAnswer).toBe(true)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correctly the pokemon's name id ${mockPokemon[0].name}`)

        await wrapper.vm.getAnswer(3)
        expect(wrapper.vm.message).toBe(`Uppps the pokemon's name id ${mockPokemon[0].name}`)

        
    });

});