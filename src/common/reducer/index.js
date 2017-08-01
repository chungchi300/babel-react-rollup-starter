import sandWichNo from './sandWichNo';
import customer from './customer';
const rootReducer = function (state = {}, action) {
  return {
    sandWichNo: sandWichNo(state.sandWichNo, action),
    customer: customer(state.sandWichNo, action)
  };
};
export default rootReducer;
