import { useRouter } from "next/router";

const Onboarding = () => {
  const router = useRouter();

  const value = useContext(GlobalContext);
  const { intersection, setIntersection, union, setUnion } =
    useContext(GlobalContext);

  const handleProgress = (condition) => {
    condition === true
      ? setProgress((prev) => Number.parseInt(prev) + 1)
      : setProgress((prev) => Number.parseInt(prev) - 2);
  };

export default Onboarding;
