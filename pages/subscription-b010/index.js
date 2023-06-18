import { useContext } from "react";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const Subscription_b010 = () => {
  const value = useContext(GlobalContext);
  const { union, intersection } = value;

  const router = useRouter();

  return (
    <div>
      {union.length !== 0 ? <div>true</div> : false}

      <button onClick={() => router.push("/home")}>메인으로</button>
    </div>
  );
};

export default Subscription_b010;
