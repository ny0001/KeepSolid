// import axios from 'axios'

// export const state = () => ({
//   pokemonsList: [],

// });

// export const actions =  {
//     async GET(context, {url, query}) {
//       let data = await axios.get(url, { params: query || {} })
//       return data;
//     },
//     async getPokemons(context, offset=0, limit=10) {
//       // let limits = context.state.selectValue;
//       // console.log(limits);
//       const data = await context.dispatch('GET', { url:`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`, root: true });
//       console.log(data.data.count)
//       // console.log(toggle)
//       // this.$store.dispatch('actionQuantuty', data.data.count);
//       if(data) {
//         const result = await Promise.all(
//           data.data.results.map((item) => {
//             return context.dispatch('GET' , { url: item.url , root: true });
//           })
//         )
//         console.log(result)
//         context.commit('setPokemonsList', result);
//         return result;
//       }
//     },
//     //  getPokemons() {
//     //     const data = axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10', {
//     //        root: true
//     //     })
//     //   console.log( data );
//     //   const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';
//     //   fetch(`${url}`)
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     console.log(data.results)
//     //   })
//     //   .catch((err) => {
//     //       console.error(err);
//     //       alert('Something wrong...');
//     //   });
//     // }
//     actionSelectValue(context, value) {
//       context.commit('setSelectValue', value);
//     },
// }

// export const mutations =  {
//     setPokemonsList(state, list) {
//       state.pokemonsList = list;
//     },
//     setSelectValue(state, value) {
//       state.selectValue = value;
//     },
// }
// export const getters =  {
//     getPokemonsList: state => state.pokemonsList,
//     getSelectValue: state => state.selectValue,
// }



