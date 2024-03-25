import { FC } from "react";
import Loader from "./Loader";

// Define types for the Overlay component props
interface OverlayProps {
  object1: string;
  object2: string;
}

// Define the Overlay component with TypeScript
const Overlay: FC<OverlayProps> = ({ object1, object2 }) => (
  <div className="overlay bg-black bg-opacity-80 flex items-center justify-center absolute top-0 left-0 w-full h-full bottom-border-radius top-border-radius">
    <div className="text-white">
      <Loader />
      <p>Loading...</p>
      <p>Object 1: {object1}</p>
      <p>Object 2: {object2}</p>
    </div>
  </div>
);

export default Overlay;
