// 이메일 유효성 검사 
export const emailValidator = (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email);

// 휴대전화번호 유효성 검사 
export const mobileValidator = (mobile) => /^01[016]\d{3,4}\d{4}$/.test(mobile.replace(/\D/g, ""));

// 비밀번호 복잡성 체크 -알파벳
export const passwordAlphaCheck = (pass, caseIncensitive) => {
    if (caseIncensitive) // 대소문자 구분없이 체크
        return /[a-z]+/i.test(pass);
    
    return /[a-z]+/.test(pass) && /[A-Z]+/.test(pass);
}

// 비밀번호 복잡성 체크 - 숫자
export const passwordNumberCheck = (pass) => /\d+/.test(pass);

// 비밀번호 복잡성 체크 - 특수문자
export const passwordSpecialCharCheck = (pass) => /[`~!#$%\\^&\\*()-_+=]+/.test(pass);