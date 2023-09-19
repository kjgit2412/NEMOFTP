package org.nemoftp.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @Builder
@NoArgsConstructor @AllArgsConstructor
public class Authorities {
    @Id
    @Column(name="_code", length=30)
    private String code;
    @Column(name="_role", length=30)
    private String role;
    private String description;
}
