import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  return (
    <div>
      <div>logo</div>
      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Username</span>

          <input
            type="text"
            placeholder="이메일 주소 입력"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
          <span class="block text-sm font-medium text-slate-700">password</span>
          <input
            type="text"
            placeholder="비밀번호 입력"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
      </form>
      <button onClick={() => router.push("/home")}>로그인</button>
      <div>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
    </div>
  );
};

export default Login;
