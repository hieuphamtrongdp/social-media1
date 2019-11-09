const initState = {
    username: {},
    infoUser: {},
    token: '',
    listErrors: [],
    listPosts: []
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESSED':

            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                infoUser: action.payload.infoUser,
                listPosts: action.payload.listPostsServerSend,
                listErrors: [],

            }
        case 'UPDATE_USER_REFRESH_SUCCESSED':

            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
                infoUser: action.payload.infoUser,
                listPosts: action.payload.listPostsServerSend,
            }
        case 'CLEAR_USER':
            return initState;

        case 'LOGIN_FAIL':
            return {
                listErrors: action.payload.errors
            }
        case 'UPDATE_PASSWORD_FAIL':
            return {
                ...state,
                listErrors: action.payload.errors
            }
        case 'UPDATE_INFO_SUCCESS':
            return {
                ...state,
                infoUser: { ...state.infoUser, birthday: action.payload.infoUser.birthday, phone: action.payload.infoUser.phone }
            }
        case 'UPDATE_AVATAR_SUCCESS':
            return {
                ...state,
                infoUser: { ...state.infoUser, url: action.payload.url }

            }
        case 'EDIT_POST_DONE':
            return {
                ...state,
                listPosts: action.payload.listPostsServerSend

            }
        case 'DELETE_DONE':
            return {
                ...state,
                listPosts: action.payload.listPostsServerSend

            }
        case 'ADD_POST_SUCCESS':
            return {
                ...state,
                listPosts: action.payload.listPostsServerSend

            }
        default:
            return state;
    }
}
export default userReducer;