import { Button } from "antd";
import PropTypes from "prop-types";

const index = (props) => (
  <Button {...props} type={props.type || "primary"}>
    {props.children}
  </Button>
);

index.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default index;
