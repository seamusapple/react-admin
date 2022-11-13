import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"></Header>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Let do it.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            beatae praesentium reprehenderit maxime hic sapiente eius magnam.
            Excepturi quasi vero recusandae est temporibus blanditiis, nesciunt
            obcaecati, ad soluta asperiores magnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
