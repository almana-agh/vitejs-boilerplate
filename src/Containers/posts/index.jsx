import { useSelector, useDispatch } from "react-redux";
import PostsSlice from "./slice";
import * as constants from "./constants";
import PostsSaga from "./saga";
import * as actions from "./slice";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { Spin } from "antd";
import * as selectors from "./selectors";
import { createStructuredSelector } from "reselect";
import Button from "@/Components/antd/Button";
import Text from "@/Components/antd/Text";

const stateSelector = createStructuredSelector({
  posts: selectors.makeSelectPosts(),
  loading: selectors.makeSelectLoading(),
});

const Counter = () => {
  useInjectReducer({ key: constants.NAME_SPACE, reducer: PostsSlice });
  useInjectSaga({ key: constants.NAME_SPACE, saga: PostsSaga });
  const dispatch = useDispatch();

  const { loading, posts } = useSelector(stateSelector);

  return (
    <div style={{ marginTop: "10rem" }}>
      <Spin spinning={loading}>
        <Button
          style={{ marginBottom: "2rem" }}
          onClick={() => dispatch(actions.fetchPostsRequest())}
        >
          Fetch Posts
        </Button>
        {posts.map((item) => (
          <Text style={{ display: "block" }} key={item?.id}>
            {item?.title}
          </Text>
        ))}
      </Spin>
    </div>
  );
};

export default Counter;
