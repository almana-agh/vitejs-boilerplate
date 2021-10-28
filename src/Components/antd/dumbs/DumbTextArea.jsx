import styles from "./dumb.less";
import { Input } from "antd";

const { TextArea } = Input;

const DumbTextArea = ({ value, textAreaProps }) => {
  return (
    <div className={styles.divStyle}>
      <TextArea value={value} {...textAreaProps} style={{ height: 137 }} />
    </div>
  );
};

export default DumbTextArea;
