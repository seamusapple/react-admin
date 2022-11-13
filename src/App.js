import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="app">
          <Sidebar></Sidebar>
          <main className="content">
            <Topbar></Topbar>
            <Routes>
              <Route path="/" element={<Dashboard></Dashboard>}></Route>
              <Route path="/team" element={<Team></Team>}></Route>
              <Route path="/contacts" element={<Contacts></Contacts>}></Route>
              <Route path="/invoices" element={<Invoices></Invoices>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/calendar" element={<Calendar></Calendar>}></Route>
              {/* <Route path="/bar" element={<Bar></Bar>}></Route> */}
              {/* <Route path="/line" element={<Line></Line>}></Route> */}
              {/* <Route path="/pie" element={<Pie></Pie>}></Route> */}
              {/* <Route path="/faq" element={<FAQ></FAQ>}></Route> */}
              {/* <Route
                path="/geography"
                element={<Geography></Geography>}
              ></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
