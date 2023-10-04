package org.nemoftp.api.controllers.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record RequestLogin(
        @NotBlank(message="이메일을 입력하세요") @Email(message="이메일 형식이 아닙니다.")
        String email,
        @NotBlank(message="비밀번호를 입력하세요.")
        String password
) {}
