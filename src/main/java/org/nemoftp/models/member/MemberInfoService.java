package org.nemoftp.models.member;

import lombok.RequiredArgsConstructor;
import org.nemoftp.entities.Authorities;
import org.nemoftp.entities.Member;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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

        List<Authorities> auths = member.getAuthorities();
        List<GrantedAuthority> authorities = auths == null ? null : auths.stream().map(a -> {
            GrantedAuthority auth = new SimpleGrantedAuthority(a.getCode());
            return auth;
        }).toList();


        return MemberInfo.builder()
                .email(member.getEmail())
                .name(member.getName())
                .member(member)
                .authorities(authorities)
                .build();
    }
}
