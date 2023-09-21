package org.nemoftp.api.controllers.dtos;

import lombok.Builder;

@Builder
public record ResponseLogin(
        String accessToken
) {}
