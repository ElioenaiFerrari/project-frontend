export default function users(state = {}, action) {
  switch (action.type) {
    case "ADD_EMAIL":
      return { ...state, email: action.email };
    case "ADD_PASSWORD":
      return { ...state, password: action.password };
    case "ADD_NAME":
      return { ...state, name: action.name };
    case "ADD_REGISTER":
      return { ...state, register: action.register };
    default:
      return state;
  }
}
