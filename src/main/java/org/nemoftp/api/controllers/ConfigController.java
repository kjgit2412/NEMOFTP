package org.nemoftp.api.controllers;

import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.JSONData;
import org.nemoftp.api.controllers.dtos.RequestSiteConfig;
import org.nemoftp.models.config.ConfigInfoService;
import org.nemoftp.models.config.ConfigSaveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/config")
public class ConfigController {
    private final ConfigSaveService saveService;
    private final ConfigInfoService infoService;
    private String configKey = "siteConfig";

    /**
     * 사이트 설정 조회
     *
     * @return
     */
    @GetMapping("/info")
    public JSONData<Map<String, String>> info() {
        Map<String, String> config = infoService.get(configKey);
        JSONData<Map<String, String>> data = new JSONData<>();
        data.setSuccess(true);
        data.setData(config);

        return data;
    }

    /**
     * 설정 저장 처리
     *
     * @param config
     * @return
     */
    @PostMapping("/save")
    public ResponseEntity<JSONData<Object>> save(@RequestBody RequestSiteConfig config) {
        saveService.save(configKey, config);
        HttpStatus status = HttpStatus.CREATED;
        JSONData<Object> data = new JSONData<>();
        data.setSuccess(true);
        data.setStatus(status);
        return ResponseEntity.status(status).body(data);
    }
}
