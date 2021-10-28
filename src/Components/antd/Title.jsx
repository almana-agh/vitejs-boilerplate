import { Typography } from "antd";
import PropTypes from "prop-types";

const { Title } = Typography;

const index = (props) => <Title {...props}>{props.children}</Title>;

index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default index;
