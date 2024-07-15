import { useRouter } from "next/router";

const Title = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <h6>북마크함</h6>
        <div onClick={() => router.push("/search")}>검색</div>
      </div>
    </div>
  );
};

export default Title;
