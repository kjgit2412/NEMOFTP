package org.nemoftp.models.member;

import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.ResponseLogin;
import org.nemoftp.jwt.TokenProvider;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;

    public ResponseLogin authenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 인증 정보 기준을 jwt access token 발급
        String accessToken = tokenProvider.createToken(authentication);

        return ResponseLogin.builder()
                .accessToken(accessToken)
                .build();
    }


}
