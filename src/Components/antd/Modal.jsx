import { Modal } from "antd";
import PropTypes from "prop-types";

const index = (props) => (
  <Modal
    {...props}
    width={props.width || 600}
    footer={props.footer || false}
    destroyOnClose={props.destroyOnClose || true}
  >
    {props.children}
  </Modal>
);

index.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  footer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  destroyOnClose: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default index;
