/* eslint-disable no-param-reassign */
import { DatePicker, Form } from "antd";
import PropTypes from "prop-types";
import moment from "moment";

const FormItem = Form.Item;

const makeDateField = (Component) =>
  Object.assign(
    ({
      input,
      meta,
      children,
      label,
      labelRight,
      label2,
      label2Style,
      ...rest
    }) => {
      const hasError = meta?.touched && meta?.invalid;
      let newValue = null;
      if (input?.value) {
        if (
          typeof input?.value === "string" ||
          input?.value instanceof String ||
          input?.value.constructor === String
        ) {
          newValue = moment(input?.value);
        } else {
          newValue = input?.value;
        }
      }
      input = {
        ...input,
        // eslint-disable-next-line no-underscore-dangle
        value: newValue && newValue._isValid ? newValue : null,
      };
      return (
        <FormItem
          label={label}
          validateStatus={hasError ? "error" : "success"}
          help={hasError && meta.error}
          style={{ marginBottom: 0 }}
        >
          {label2 && <div className={`${label2Style}`}>{label2}</div>}
          <Component
            style={(rest.style && rest.style) || { width: "100%" }}
            {...input}
            {...rest}
            // onChange={(date, dateString) => {
            //   input.onChange(dateString);
            // }}
          >
            {children}
          </Component>
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

export default makeDateField(DatePicker);
