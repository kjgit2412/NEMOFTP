package org.nemoftp.api.controllers.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record RequestLogin(
        @NotBlank @Email
        String email,
        @NotBlank
        String password
) {}
