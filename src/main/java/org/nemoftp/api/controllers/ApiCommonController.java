package org.nemoftp.api.controllers;

import org.nemoftp.api.controllers.dtos.JSONData;
import org.nemoftp.commons.CommonException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice("org.nemoftp.api.controllers")
public class ApiCommonController {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<JSONData<Object>> errorHandler(Exception e) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        if (e instanceof CommonException) {
            CommonException commonException = (CommonException)e;
            status = commonException.getStatus();
        } else if (e instanceof BadCredentialsException) {
            status = HttpStatus.UNAUTHORIZED;
        }

        JSONData<Object> data = JSONData.builder()
                .message(e.getMessage())
                .status(status)
                .build();

        e.printStackTrace();
        return ResponseEntity.status(status).body(data);
    }
}
