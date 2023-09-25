package org.nemoftp.api.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.JSONData;
import org.nemoftp.api.controllers.dtos.RequestJoin;
import org.nemoftp.api.controllers.dtos.RequestLogin;
import org.nemoftp.api.controllers.dtos.ResponseLogin;
import org.nemoftp.entities.Member;
import org.nemoftp.jwt.CustomJwtFilter;
import org.nemoftp.models.member.LoginService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/member")
@RequiredArgsConstructor
public class MemberController {
    private final LoginService loginService;

    /**
     * access token 발급
     * @return
     */
    @PostMapping("/token")
    public ResponseEntity<JSONData<ResponseLogin>> authorize(@Valid @RequestBody RequestLogin requestLogin) {
        ResponseLogin token = loginService.authenticate(requestLogin.email(), requestLogin.password());

        HttpHeaders headers = new HttpHeaders();
        headers.add(CustomJwtFilter.AUTHORIZATION_HEADER, "Bearer " + token.accessToken());

        JSONData<ResponseLogin> data = new JSONData<>();
        data.setData(token);
        data.setSuccess(true);

        return ResponseEntity.status(HttpStatus.OK)
                .headers(headers)
                .body(data);
    }

    /**
     * 회원가입 처리
     *
     * @return
     */
    @PostMapping
    public ResponseEntity<JSONData<Member>> join(@Valid RequestJoin join, Errors errors) {

        return null;
    }
}
