import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart"></Header>
      <Box height="75vh">
        <PieChart></PieChart>
      </Box>
    </Box>
  );
};

export default Bar;
