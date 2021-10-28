import { Table } from "antd";
import PropTypes from "prop-types";

const index = (props) => (
  <Table
    {...props}
    rowKey={props.rowKey || "id"}
    size={props.size || "small"}
    pagination={
      props.pagination || {
        showSizeChanger: true,
        showQuickJumper: true,
        defaultPageSize: window.screen.height > 1100 ? 50 : 25,
        pageSizeOptions: ["25", "50", "100"],
        hideOnSinglePage: true,
        total: props.total,
      }
    }
    style={
      props.style || {
        padding: "0",
        marginTop: props.marginTop || 10,
        backgroundColor: "#fff",
        marginBottom: props.dataSource?.length > 25 ? 0 : 50,
        clear: "both",
        minHeight:
          props.minHeight === false ? undefined : props.minHeight || "100vh",
      }
    }
    scroll={props.scroll === false ? false : props.scroll || { y: "100vh" }}
  />
);

index.propTypes = {
  rowKey: PropTypes.string,
  size: PropTypes.string,
  pagination: PropTypes.object,
  total: PropTypes.number,
  style: PropTypes.object,
  marginTop: PropTypes.string,
  dataSource: PropTypes.array,
  minHeight: PropTypes.string,
  scroll: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default index;
