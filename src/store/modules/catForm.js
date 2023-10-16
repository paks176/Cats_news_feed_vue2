import Store from './../store'

export default {
    actions: {
        fetchFormCat(context, { imgElement, path }) {
            event.preventDefault();
            imgElement.src = '';
            imgElement.src = path;
            fetch('https://api.thecatapi.com/v1/images/search/',
                {
                    headers: {'Access-Control-Allow-Origin': 'access-control-allow-origin'}
                })
                .then(result => result.json())
                .then(data => context.commit('changeCatForm', data))
        },
        sendPost(context, {fetchData, description}) {
            event.preventDefault();
            const newPost = {
                id: description,
                url: fetchData.imgElement.src
            }
            context.commit('addPost', newPost)
        },
    },
    mutations: {
        changeCatForm(state, data) {
            state.catImage = data[0].url;
        },
        addPost(state, newPost) {
            Store.state.cats.unshift(newPost)
        }
    },
    state: {
        catImage: '',
        description: '',
    },
    getters: {
        getCatImage(state) {
            console.log(state.catImage)
            return state.catImage
        }
    },
}