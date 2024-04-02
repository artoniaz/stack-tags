import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <BounceLoader
      size={120}
      aria-label="Loading Spinner"
      data-testid="loader"
      cssOverride={{
        position: "absolute",
        display: "block",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Loading;
