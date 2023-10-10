package org.nemoftp.models.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import org.nemoftp.entities.Configs;
import org.nemoftp.repositories.ConfigsRepository;
import org.springframework.stereotype.Service;

/**
 * 설정 조회
 *
 */
@Service
@RequiredArgsConstructor
public class ConfigInfoService {
    private final ConfigsRepository repository;

    public <T> T get(String key) {
        ObjectMapper om = new ObjectMapper();
        om.registerModule(new JavaTimeModule());

        Configs conf = repository.findById(key).orElse(null);
        if (conf == null || conf.getValue().isBlank()) return null;

        T data = null;
        try {
            data = om.readValue(conf.getValue(), new TypeReference<T>(){});
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return data;
    }
}
