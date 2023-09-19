package org.nemoftp.entities;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(EntityListeners.class)
public abstract class CommonMemberInfo extends CommonInfo {
    @CreatedBy
    @Column(length=80, updatable = false)
    private String createdBy;
    @LastModifiedBy
    @Column(length=80, insertable = false)
    private String modifiedBy;
}
