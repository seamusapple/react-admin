import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart"></Header>
      <Box height="75vh">
        <LineChart></LineChart>
      </Box>
    </Box>
  );
};

export default Bar;
