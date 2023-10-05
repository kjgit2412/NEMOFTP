package org.nemoftp.models.member;

import lombok.RequiredArgsConstructor;
import org.nemoftp.entities.Member;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
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
}
