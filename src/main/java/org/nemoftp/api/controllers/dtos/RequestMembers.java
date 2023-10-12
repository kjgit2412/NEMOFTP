package org.nemoftp.api.controllers.dtos;

/**
 * 회원목록 조회
 * @param page
 * @param limit
 */
public record RequestMembers(
    Integer page,
    Integer limit
) {}
