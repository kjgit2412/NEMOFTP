package org.nemoftp.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

@Entity
@Data
public class Configs extends CommonInfo {
    @Id
    @Column(name="_key", length=30)
    private String key;

    @Lob
    @Column(name="_value")
    private String value;
}
