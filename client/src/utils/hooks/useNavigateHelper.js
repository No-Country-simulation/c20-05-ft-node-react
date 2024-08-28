import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateHelper = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateTo = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return { navigateBack, navigateTo };
};

export default useNavigateHelper;
