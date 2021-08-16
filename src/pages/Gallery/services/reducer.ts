const initialState = {
    data: 0
}

const reducer = (state: typeof initialState, action: any) => {
    const { type } = action
    switch (type) {
        case "Success":

            return state;

        default:
            return state;
    }
}

export default reducer