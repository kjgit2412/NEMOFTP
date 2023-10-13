package org.nemoftp.api.controllers.dtos;

import lombok.Data;
import org.nemoftp.commons.utils.Pagination;

import java.util.List;

/**
 * 목록 전용
 *
 */
@Data
public class ListData<T> {
    private List<T> content;
    private Pagination pagination;
}