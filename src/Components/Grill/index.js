import { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Grill from '../../Utils/GrillUtils'
import { registerRoundedRectangle, changeCanvasDimensions, addRoundRectangleToCanvas, refreshCanvas, ToolTip } from '../../Utils/CanvasUtils'
import { updateRemainingItems } from "../../Redux/Grill";
import styles from './styles';

const useStyles = makeStyles(styles);

const GrillApp = ({ grillData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const canvasRef = useRef(null)


  useEffect(() => {
    if (grillData) {
      const { grill } = grillData;
      if (!grill) return false;
      const canvas = canvasRef.current;
      const canvasOptions = {
        canvas, 
        width: grill.width, 
        height: grill.height
      }
      changeCanvasDimensions(canvasOptions);
      const processedItems = processItems(grill);
      addItemsToGrill(processedItems);
    }
  }, [grillData]);

  const processItems = (grillData) => {
    let { grillItems } = grillData;
    let itemAccumilator = [];
    grillItems.forEach(item => {
      const { height, width } = item;
      for (let i = 0; i < item.count; i++) {
        itemAccumilator.push({ height, width, name: item.title });
      }
    });
    const grill = new Grill(grillData.width, grillData.height);
    grill.checkAndPlace(itemAccumilator);
    return itemAccumilator;
  };

  const addItemsToGrill = (items) => {
    registerRoundedRectangle();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")
    const refereshCanvasOptions = {
      context: ctx,
      width: canvas.width,
      height: canvas.height
    }
    refreshCanvas(refereshCanvasOptions);
    const toolTips = []
    const filteredItems = items.filter((item, index) => {
      if (item.fit) {
        const roundRectangleOptions =  {
          context: ctx, 
          x: item.fit.x, 
          y: item.fit.y, 
          width: item.width, 
          height: item.height
        }
        addRoundRectangleToCanvas(roundRectangleOptions);
        toolTips[index] = new ToolTip(canvas, {x: item.fit.x,y: item.fit.y, w: item.width, h: item.height }, item.name, 100);
        return false
      }
      return true
    })
    dispatch(updateRemainingItems(filteredItems));
    return true;
  }

  return (
    <div className={classes.root}>
      <div className={classes.grill}>
        <canvas ref={canvasRef} width='0' height='0' />
      </div>
    </div>
  );
};

export default GrillApp;