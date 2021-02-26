import { Container, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, GrillApp, GrillData, RemainingItems } from "../../Components";
import { getGrillItems } from "../../Redux/Grill";

const Home = () => {
  const dispatch = useDispatch();
  const { grillData, remainingItems } = useSelector(({ grillReducer }) => grillReducer);
  
  useEffect(() => {
    dispatch(getGrillItems());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <GrillApp grillData={grillData} />
            <GrillData grillData={grillData} />
          </Grid>
          <Grid item xs={4}>
            <RemainingItems remainingItems={remainingItems} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;