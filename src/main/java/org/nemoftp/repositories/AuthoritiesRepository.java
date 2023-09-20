package org.nemoftp.repositories;

import org.nemoftp.entities.Authorities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface AuthoritiesRepository extends JpaRepository<Authorities, String>, QuerydslPredicateExecutor<Authorities> {

}
