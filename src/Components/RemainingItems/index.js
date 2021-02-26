import {
  Card,
  CardContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import styles from './styles';

const useStyles = makeStyles(styles);

const RemainingItems = ({ remainingItems }) => {
  const classes = useStyles();

  const renderRemainingItems = (remainingItems) => {
    return remainingItems.map((item, index) => (
      <TableRow key={`remainingItem-${index}`}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.height}x{item.width}</TableCell>
      </TableRow>
    ))
  }

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Items out of grill
        </Typography>
        <Table className={classes.table} aria-label="Items out of grill">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderRemainingItems(remainingItems)}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RemainingItems