
import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Happy shopping!`;
  }, [title]);
};

export default useTitle;
