package org.nemoftp.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @Builder
@AllArgsConstructor @NoArgsConstructor
public class Member extends CommonInfo {
    @Id
    @GeneratedValue
    private Long seq; // 회원번호
    @Column(length=80, unique = true, nullable = false)
    private String email;

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
}
