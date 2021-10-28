import { Typography } from "antd";
import PropTypes from "prop-types";

const { Text } = Typography;

const index = (props) => <Text {...props}>{props.children}</Text>;

index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default index;
