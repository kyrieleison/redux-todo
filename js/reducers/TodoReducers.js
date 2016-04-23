export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        tect: action.text
      }
    default:
      return state
  }
}
export default todo
