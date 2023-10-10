package org.nemoftp.models.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import lombok.RequiredArgsConstructor;
import org.nemoftp.entities.Configs;
import org.nemoftp.repositories.ConfigsRepository;
import org.springframework.stereotype.Service;

/**
 * 설정 저장 처리
 *
 */
@Service
@RequiredArgsConstructor
public class ConfigSaveService {
    private final ConfigsRepository repository;

    public boolean save(String key, Object data) {
        ObjectMapper om = new ObjectMapper();
        om.registerModule(new JavaTimeModule());
        try {
            String value = om.writeValueAsString(data);
            Configs configs = repository.findById(key).orElseGet(Configs::new);
            configs.setKey(key);
            configs.setValue(value);
            repository.saveAndFlush(configs);

            return true;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return false;
    }
}
