package org.nemoftp.commons.utils;

import org.springframework.stereotype.Component;

/**
 * 공통 유틸리티
 */
@Component
public class Utils {
    public static int getNumber(int num, int defaultValue) {
        return num <= 0 ? defaultValue : num;
    }
}
