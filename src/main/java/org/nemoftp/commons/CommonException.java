package org.nemoftp.commons;

import org.springframework.http.HttpStatus;

/**
 * 공통 예외
 *
 */
public class CommonException extends RuntimeException {
    private HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
    public CommonException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
