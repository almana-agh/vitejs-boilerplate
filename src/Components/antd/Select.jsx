/* eslint-disable no-param-reassign */
import { Select, Form } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

export default Object.assign(
  ({
    input,
    meta,
    children,
    label,
    label2,
    label2Style,
    labelRight,
    ...rest
  }) => {
    if (input) {
      if (input.value !== 0 && !input.value) {
        input.value = undefined;
      }

      if (input.value !== 0 && !input.value) {
        if (rest.mode === "multiple") {
          input.value = [];
        } else {
          input.value = undefined;
        }
      }
    }

    const hasError = meta && meta.touched && meta.invalid;
    return (
      <FormItem
        label={label}
        validateStatus={hasError ? "error" : "success"}
        help={hasError && meta.error}
      >
        {label2 && <div className={`${label2Style}`}>{label2}</div>}
        <Select {...input} {...rest}>
          {children}
        </Select>
        {labelRight && <span>{labelRight}</span>}
      </FormItem>
    );
  },
  {
    propTypes: {
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
      label2: PropTypes.string,
      label2Style: PropTypes.string,
      labelRight: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.node,
      ]),
    },
  }
);

export const { Option } = Select;
