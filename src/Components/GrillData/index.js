import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGrillItems } from "../../Redux/Grill";
import { isValidJSONString } from '../../Utils/GrillUtils';
import styles from './styles';

const useStyles = makeStyles(styles);

const GrillData = ({ grillData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    setText(JSON.stringify(grillData, null, 2));
  }, [grillData]);

  const changeText = (e) => {
    setError('')
    const { value: json } = e.target;
    setText(json);
    if(!isValidJSONString(json)) {
      setError('Invalid JSON')
      return false;
    }
    return dispatch(updateGrillItems(JSON.parse(json)))
  };

  return (
    <>
      {error && <p className={classes.error}>{error}</p>}
      <textarea
        rows="35"
        cols="50"
        onChange={changeText}
        className={error ? classes.preWithError : classes.pre}
        value={text}
      ></textarea>
    </>
  );
};

export default GrillData;