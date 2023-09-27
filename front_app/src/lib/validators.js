// 이메일 유효성 검사 
export const emailValidator = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

// 휴대전화번호 유효성 검사 
export const mobileValidator = (mobile) => /^01[016]\d{3,4}\d{4}$/.test(mobile.replace(/\D/g, ""));