import styles from "./dumb.less";
import Input from "../Input";

const DumbInput = ({ value }) => {
  return (
    <div className={styles.divStyle}>
      <Input value={value} />
    </div>
  );
};

export default DumbInput;
