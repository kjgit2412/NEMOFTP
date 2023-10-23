package org.nemoftp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Builder
@AllArgsConstructor @NoArgsConstructor
public class Member extends CommonInfo {
    @Id
    @GeneratedValue
    private Long seq; // 회원번호
    @Column(length=80, unique = true, nullable = false)  
    private String email;

    @JsonIgnore
    @Column(length=65, nullable = false)
    private String password;

    @Column(length=40, nullable = false)
    private String name;

    @Column(length=20)
    private String cellPhone;

    @Column(length=45)
    private String companyName;

    @Column(length=45)
    private String department;

    @Column(length=10)
    private String zipcode;

    @Column(length=100)
    private String address;

    @Column(length=100)
    private String addressSub;

    private boolean expired;
    private boolean locked;
    private boolean credentialExpired;
    private boolean enabled;

    @ToString.Exclude
    @ManyToMany(fetch=FetchType.LAZY)
    private List<Authorities> authorities = new ArrayList<>();
}
