package org.nemoftp.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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

    @ToString.Exclude
    @ManyToMany(mappedBy="authorities", fetch=FetchType.LAZY)
    private List<Member> members = new ArrayList<>();
}
