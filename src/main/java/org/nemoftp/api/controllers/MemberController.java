package org.nemoftp.api.controllers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.nemoftp.api.controllers.dtos.JSONData;
import org.nemoftp.api.controllers.dtos.RequestJoin;
import org.nemoftp.api.controllers.dtos.RequestLogin;
import org.nemoftp.api.controllers.dtos.ResponseLogin;
import org.nemoftp.commons.exceptions.BadRequestException;
import org.nemoftp.entities.Member;
import org.nemoftp.jwt.CustomJwtFilter;
import org.nemoftp.models.member.LoginService;
import org.nemoftp.models.member.MemberInfo;
import org.nemoftp.models.member.MemberInfoService;
import org.nemoftp.models.member.MemberSaveService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/member")
@RequiredArgsConstructor
public class MemberController {
    private final LoginService loginService;
    private final MemberInfoService infoService;
    private final MemberSaveService saveService;
    /**
     * access token 발급
     * @return
     */
    @PostMapping("/token")
    public ResponseEntity<JSONData<ResponseLogin>> authorize(@Valid @RequestBody RequestLogin requestLogin, Errors errors, HttpServletRequest request, HttpServletResponse response) {
        if (errors.hasErrors()) {
            String message = errors.getAllErrors().stream().map(ObjectError::getDefaultMessage).findFirst().get();
            throw new BadRequestException(message);
        }

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
    public ResponseEntity<JSONData<Member>> join(@RequestBody @Valid RequestJoin form, Errors errors) {

        Member member = saveService.join(form, errors);

        if (errors.hasErrors()) {
            String message = errors.getAllErrors().stream().map(ObjectError::getDefaultMessage).findFirst().get();
            throw new BadRequestException(message);
        }
        HttpStatus status = HttpStatus.CREATED;
        JSONData<Member> data = new JSONData<>();
        data.setSuccess(true);
        data.setData(member);
        data.setStatus(status);

        return ResponseEntity.status(status).body(data);
    }

    @GetMapping("/exists/{email}")
    public JSONData<Object> exists(@PathVariable String email) {
        JSONData<Object> data = new JSONData<>();
        data.setSuccess(infoService.exists(email));

        return data;
    }

    @GetMapping("/info")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public JSONData<Member> myinfo(@AuthenticationPrincipal MemberInfo memberInfo) {
       Member member = memberInfo.getMember();
        JSONData<Member> data = new JSONData<>();
        data.setSuccess(true);
        data.setData(member);

        return data;
    }


}
