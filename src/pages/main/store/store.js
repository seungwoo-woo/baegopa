export const plusStr = () => ({ type: 'PLUS', str: 'helloWorld' });
const initState = {
  str: 'Not'
}
export const reducer = (state = initState, action) => {
  switch (action.type) {
      case 'PLUS':
          return { str: state.str + state.str}
      default:
          return state;
  }
}