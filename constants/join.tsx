/* 구성 요소 */
export const phoneTextElement = {
  phoneNumberPh: "'-' 없이 입력",
  authNumberPh: "6자리 숫자 입력",
  timeoutBtn: "만료됨",
  authSendBtn: "인증 요청",
  reAuthSendBtn: "재전송",
  redirectSignup: "인증 실패",
};

export const idPlaceholderText = {
  placeholder: "6~12자, 영문/숫자 조합",
};

export const pswdText = {
  pswd: "8자 이상, 영문/숫자 조합",
  pswdCheck: "8자 이상, 영문/숫자 조합",
};

/* 에러 메시지 */
export const phoneErrorMessage = {
  authRequested: "재전송은 3회까지 가능해요.",
  default: "문자가 오지 않는다면 재전송 버튼을 눌러주세요.",
  error_timeout: "인증번호를 재전송해 주세요.",
  error_failed: "인증번호를 다시 확인해주세요.",
};

export const idErrorMessage = {
  default: "아이디를 입력하세요.",
  error_total: "6~12자, 영문/숫자 조합으로 입력해주세요.",
  error_combination: "영문/숫자 조합으로 구성해주세요.",
  error_length: "6~12자 이내로 입력해주세요.",
  error_exist: "이미 사용중인 아이디입니다.",
};

export const pswdErrorMessage = {
  error_total: "8~12자, 영문/숫자 조합으로 입력해주세요.",
  error_combination: "영문/숫자 조합으로 구성해주세요.",
  error_length: "8자 이상의 비밀번호를 입력해주세요.",
  error_match: "비밀번호가 일치하지 않습니다.",
};

export const nicknameErrorMessage = {
  default_nickname: "닉네임은 프로필과 뉴스레터 구독 시 사용돼요.",
  error_nickname: "특수문자는 사용할 수 없어요",
  default_birthYear: "출생연도는 뉴스레터 추천에 활용돼요.",
  default_gender: "성별은 뉴스레터 추천에 활용돼요.",
  modify_nickname: "닉네임은 12자 이내로 입력해 주세요.",
};
