package org.nemoftp.api.controllers.dtos;

import org.nemoftp.commons.utils.Pagination;

import java.util.List;

/**
 * 목록 전용
 * @param content
 * @param pagination
 * @param <T>
 */
public record ListData<T>(List<T> content, Pagination pagination) {}
