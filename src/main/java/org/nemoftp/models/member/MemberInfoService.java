package org.nemoftp.models.member;

import com.querydsl.core.BooleanBuilder;
import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.ListData;
import org.nemoftp.api.controllers.dtos.RequestMembers;
import org.nemoftp.commons.utils.Utils;
import org.nemoftp.entities.Member;
import org.nemoftp.entities.QMember;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static org.springframework.data.domain.Sort.Order.desc;

@Service
@RequiredArgsConstructor
public class MemberInfoService implements UserDetailsService {
    private final MemberRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Member member = repository.findByEmail(username);
        if (member == null) {
            throw new UsernameNotFoundException(username);
        }

        //List<Authorities> auths = member.getAuthorities();
        //List<? extends GrantedAuthority> authorities = auths == null ? Arrays.asList(new SimpleGrantedAuthority("USER")) : auths.stream().map(a -> new SimpleGrantedAuthority(a.getCode())).toList();

        List<? extends GrantedAuthority> authorities =  Arrays.asList(new SimpleGrantedAuthority("USER"));
        return MemberInfo.builder()
                .email(member.getEmail())
                .name(member.getName())
                .member(member)
                .authorities(authorities)
                .build();
    }

    /**
     * 등록회원인지 이메일로 체크
     * @param email
     * @return
     */
    public boolean exists(String email) {
        return repository.exists(email);
    }

    public ListData<Member> getMembers(RequestMembers params) {
        int page = Utils.getNumber(Objects.requireNonNullElse(params.page(), 1), 1);
        int limit = Utils.getNumber(Objects.requireNonNullElse(params.limit(), 20), 20);

        BooleanBuilder andBuilder = new BooleanBuilder();
        QMember member = QMember.member;
        Pageable pageable = PageRequest.of(page - 1, limit, Sort.by(desc("createdAt")));

        Page<Member> data = repository.findAll(andBuilder, pageable);

        return null;
    }
}
