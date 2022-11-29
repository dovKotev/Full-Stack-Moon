import {useState} from "react";

function useCurrentPage() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  return {currentPage, changePage};
}

export default useCurrentPage;
