package org.nemoftp.api.controllers.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@Builder
@NoArgsConstructor @AllArgsConstructor
public class JSONData<T> {
    private boolean success;
    private T data;
    private String message;
    private HttpStatus status = HttpStatus.OK;
}
