package org.nemoftp.api.controllers.dtos;

/**
 * 회원목록 조회
 * @param page
 * @param limit
 */
public record RequestMembers(
    Integer page,
    Integer limit,
    String sopt,
    String skey,
    String email,
    String name,
    String cellPhone
) {}
