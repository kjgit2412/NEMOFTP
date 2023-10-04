package org.nemoftp.api.controllers.validators;

import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.RequestJoin;
import org.nemoftp.commons.validators.MobileValidator;
import org.nemoftp.commons.validators.PasswordValidator;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

/**
 * 회원가입 유효성 검사
 *
 */
@Component
@RequiredArgsConstructor
public class JoinValidator implements Validator, PasswordValidator, MobileValidator {
    private final MemberRepository repository;

    @Override
    public boolean supports(Class<?> clazz) {
        return clazz.isAssignableFrom(RequestJoin.class);
    }

    @Override
    public void validate(Object target, Errors errors) {
        RequestJoin form = (RequestJoin)target;

        /**
         * 1. 아이디 중복 여부 체크
         * 2. 비밀번호 복잡성 체크
         * 3. 비밀번호 및 비밀번호 확인 일치 여부
         * 4. 휴대전화번호 형식 체크
         */

        String email = form.email();
        String password = form.password();
        String confirmPassword = form.confirmPassword();
        String cellPhone = form.cellPhone();

        // 1. 아이디 중복 여부 체크
        if (email != null && !email.isBlank() && repository.exists(email)) {
            errors.rejectValue("email", "duplicated", "이미 등록된 이메일입니다.");
        }

        // 2. 비밀번호 복잡성 체크
        if (password != null && !password.isBlank() && (!alphaCheck(password, false) || !numberCheck(password) || !specialCharsCheck(password))) {
            errors.rejectValue("password", "format", "비밀번호는 8자 이상의 대소문자 포함 알파벳, 숫자, 특수문자로 입력하세요.");
        }

        // 3. 비밀번호 및 비밀번호 확인 일치 여부
        if (password != null && !password.isBlank() && confirmPassword != null && !confirmPassword.isBlank() && !password.equals(confirmPassword)) {
            errors.rejectValue("confirmPassword", "mismatch", "비밀번호가 일치하지 않습니다.");
        }

        // 4. 휴대전화번호 형식 체크
        if (cellPhone != null && !cellPhone.isBlank() && !mobileNumCheck(cellPhone)) {
            errors.rejectValue("cellPhone", "format", "휴대전화번호 형식이 아닙니다.");
        }
    }
}
