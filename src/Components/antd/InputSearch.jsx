import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import Field from "./Field";

const Search = Field(Input);

const index = (props) => (
  <Search
    suffix={
      <SearchOutlined style={{ fontSize: 20, color: "rgba(0,0,0, 0.5)" }} />
    }
    placeholder={props.placeholder || "Search"}
    size={props.size || "large"}
    {...props}
  />
);

index.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  size: PropTypes.string,
};

export default index;
