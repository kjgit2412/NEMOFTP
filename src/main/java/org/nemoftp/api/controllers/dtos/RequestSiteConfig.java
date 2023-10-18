package org.nemoftp.api.controllers.dtos;

/**
 * 사이트 설정
 * @param siteTitle
 * @param joinTerms
 */
public record RequestSiteConfig(
        String siteTitle,
        String joinTerms) {}
