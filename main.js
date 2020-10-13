console.log(window.Redux);
const { createStore } = window.Redux;

const initialState = [
    "Listen to musique"
];

const hobbyReducer = (state = initialState, action) => {
    return state;
}

const store = createStore(hobbyReducer);

//render redux hobby list
const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || !hobbyList.length) return;

    const ulElement = document.querySelector("#ul_hobbie");
    if (!ulElement) return;

    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    }

}

//render initial hobbilist
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//handle form submit
const hobbyFormElement = document.querySelector("#hobbyForm");
if (hobbyFormElement) {
    const handleFormSubmit = e => {
        e.preventDefault();
        const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
        if (!hobbyTextElement) return;

        const action = {
            type: 'ADD_HOBBY',
            payLoad: hobbyTextElement.value
        }

        store.dispatch(action)
    }
    hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log('State update', store.getState());
})