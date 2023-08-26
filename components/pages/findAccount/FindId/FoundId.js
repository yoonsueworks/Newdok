import { useRouter } from "next/router";

const Found = ({ accounts }) => {
  const router = useRouter();
  const accountAsterisk = (account) => {
    const maskedPart = "*".repeat(account.length - 4);
    const maskedString = account.slice(0, 4) + maskedPart;
    return maskedString;
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="grid gap-y-7">
        <div className="multiple-24-b">
          입력하신 번호로
          <br />
          {accounts.length}개의 계정을 찾았어요.
        </div>
        <div className="grid gap-y-6">
          <ul className="grid gap-y-2.5">
            {accounts.map((account) => {
              return (
                <li
                  className="input-border p-5 rounded-lg flex justify-between items-center"
                  key={account.id}
                >
                  <span className="single-16-b text-neutralgray-900">
                    {accountAsterisk(account.loginId)}
                  </span>
                  <span className="single-12-m text-neutralgray-500">
                    {account.createdAt.split("T")[0].replaceAll("-", ".")} 가입
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="single-14-m">
            전체 아이디를 알고 싶다면 여기로 문의해 주세요.
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full h-fit p-5 rounded-[14px] text-white single-24-b bg-purple-700 active:bg-purple-800 hover:bg-purple-400 transition-colors duration-300"
        onClick={() => router.push("/login")}
      >
        로그인
      </button>
    </div>
  );
};

export default Found;
