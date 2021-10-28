import { Form } from "antd";
import PropTypes from "prop-types";

const FormItem = Form.Item;

export default (Component) =>
  Object.assign(
    ({
      input,
      meta,
      children,
      hasFeedback,
      label,
      labelRight,
      label2,
      label2Style,
      ...rest
    }) => {
      const hasError = meta && meta.touched && meta.invalid;
      return (
        <FormItem
          label={label}
          validateStatus={hasError ? "error" : "success"}
          help={hasError && meta.error}
        >
          {label2 && <div className={`${label2Style}`}>{label2}</div>}
          <Component
            {...input}
            {...rest}
            style={(rest.style && rest.style) || { width: "100%" }}
          >
            {children}
          </Component>
          {labelRight && (
            <span style={{ marginLeft: 10 }}>
              <b>{labelRight}</b>
            </span>
          )}
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
