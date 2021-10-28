import { Card } from "antd";
import PropTypes from "prop-types";

const index = (props) => (
  <Card
    {...props}
    bodyStyle={
      props.bodyStyle || {
        padding: `${(props.md && "15px") || "10px"} 15px ${
          (props.md && "15px") || "10px"
        } 15px`,
      }
    }
  >
    {props.children}
  </Card>
);

index.propTypes = {
  bodyStyle: PropTypes.object,
  md: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default index;
