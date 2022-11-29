import {Routes, Route} from "react-router-dom";
import pages from "../Helpers/pages";

function SwichPages({...props}) {
  const swichPages = pages.map((page) => {
    return (
      <Route
        key={page.name}
        path={page.path}
        element={<page.component {...props} />}
      />
    );
  });
  return (
    <>
      <Routes>{swichPages}</Routes>
    </>
  );
}

export default SwichPages;
