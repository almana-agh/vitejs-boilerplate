/* eslint-disable no-param-reassign */
import { Slider, Form } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

const index = ({ input, meta, children, label, labelRight, ...rest }) => {
  if (input.value !== 0 && !input.value) {
    if (rest.range) {
      input.value = [0, 0];
    } else {
      input.value = 0;
    }
  }

  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      validateStatus={hasError ? "error" : "success"}
      help={hasError && meta.error}
      style={{ marginBottom: 0, width: "100%", marginLeft: "" }}
    >
      {label && <div>{label}</div>}
      <Slider {...input} {...rest}>
        {children}
      </Slider>
      {labelRight && <span>{labelRight}</span>}
    </FormItem>
  );
};

index.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  label: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.node,
  ]),
  labelRight: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.node,
  ]),
};

export default index;
