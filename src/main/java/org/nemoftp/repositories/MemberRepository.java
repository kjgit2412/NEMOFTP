package org.nemoftp.repositories;

import org.nemoftp.entities.Member;
import org.nemoftp.entities.QMember;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface MemberRepository extends JpaRepository<Member, Long>, QuerydslPredicateExecutor<Member> {
    @EntityGraph(attributePaths = "authorities")
    Member findByEmail(String email);

    /**
     * 등록된 회원인지 체크
     * @param email
     * @return
     */
    default boolean exists(String email) {
        return exists(QMember.member.email.eq(email));
    }
}
