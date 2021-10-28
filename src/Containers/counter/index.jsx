import { useSelector, useDispatch } from "react-redux";
import { useInjectReducer } from "redux-injectors";
import { createStructuredSelector } from "reselect";
import GlobalSlice, * as actions from "@/store/slice";
import * as constants from "@/store/constants";
import { makeSelectCount } from "@/store/globalSelector";
import Button from "@/Components/antd/Button";

const stateSelector = createStructuredSelector({
  count: makeSelectCount(),
});

const Counter = () => {
  useInjectReducer({ key: constants.GLOBAL_NAME_SPACE, reducer: GlobalSlice });
  const dispatch = useDispatch();

  const { count } = useSelector(stateSelector);

  return (
    <div style={{ marginTop: "10rem" }}>
      Counter - {count}
      <div style={{ marginTop: "10rem" }}>
        <Button
          type="primary"
          style={{ marginRight: "1rem" }}
          onClick={() => dispatch(actions.increment())}
        >
          Increment
        </Button>
        <Button
          style={{ marginRight: "1rem" }}
          onClick={() => dispatch(actions.decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
