package org.nemoftp.api.controllers.dtos;

/**
 * 사이트 설정
 * @param siteTItle
 * @param joinTerms
 */
public record RequestSiteConfig(
        String siteTItle,
        String joinTerms) {}
