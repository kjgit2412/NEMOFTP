package org.nemoftp.models.member;

import com.querydsl.core.BooleanBuilder;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.nemoftp.api.controllers.dtos.ListData;
import org.nemoftp.api.controllers.dtos.RequestMembers;
import org.nemoftp.commons.utils.Pagination;
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
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static org.springframework.data.domain.Sort.Order.desc;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberInfoService implements UserDetailsService {
    private final MemberRepository repository;
    private final HttpServletRequest request;

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
     * 회원번호로 회원 조회
     *
     * @param seq
     * @return
     */
    public Member getMember(Long seq) {
        Member member = repository.findById(seq).orElseThrow(MemberNotFoundException::new);

        return member;
    }
    /**
     * 등록회원인지 이메일로 체크
     * @param email
     * @return
     */
    public boolean exists(String email) {
        return repository.exists(email);
    }

    /**
     * 회원 목록 조회
     *
     * @param params
     * @return
     */
    public ListData<Member> getMembers(@RequestBody RequestMembers params) {
        int page = Utils.getNumber(Objects.requireNonNullElse(params.page(), 1), 1);
        int limit = Utils.getNumber(Objects.requireNonNullElse(params.limit(), 20), 20);

        BooleanBuilder andBuilder = new BooleanBuilder();
        QMember member = QMember.member;

        /* 검색 조건 처리 S */
        String email = params.email();
        String name = params.name();
        String cellPhone = params.cellPhone();
        String sopt = params.sopt();
        String skey = params.skey();

        // 이메일 검색 처리
        if (email != null && !email.isBlank()) {
            andBuilder.and(member.email.contains(email.trim()));
        }

        // 회원명 검색 처리
        if (name != null && !name.isBlank()) {
            andBuilder.and(member.name.contains(name.trim()));
        }

        // 휴대전화번호 검색 처리
        if (cellPhone != null && !cellPhone.trim().isBlank()) {
            cellPhone = cellPhone.replaceAll("\\D", "");
            andBuilder.and(member.cellPhone.contains(cellPhone));
        }

        // 키워드 검색 처리
        if (sopt != null && !sopt.trim().isBlank() && skey != null && !skey.trim().isBlank()) {
            skey = skey.trim();
            if (skey.equals("all")) { // 통합검색
                String _cellPhone = skey.replaceAll("\\D", "");
                BooleanBuilder orBuilder = new BooleanBuilder();
                orBuilder.or(member.name.contains(skey))
                        .or(member.email.contains(skey))
                        .or(member.cellPhone.contains(skey))
                        .or(member.cellPhone.contains(_cellPhone))
                        .or(member.companyName.contains(skey))
                        .or(member.department.contains(skey));
                andBuilder.and(orBuilder);
            } else if (skey.equals("name")) { // 회원명
                andBuilder.and(member.name.contains(skey));
            } else if (skey.equals("email")) { // 이메일
                andBuilder.and(member.email.contains(skey));
            } else if (skey.equals("cellPhone")) { // 휴대전화번호
                skey = skey.replaceAll("\\D", "");
                andBuilder.and(member.cellPhone.contains(skey));
            } else if (skey.equals("company_name")) { // 회사명
                andBuilder.and(member.companyName.contains(skey));
            } else if (skey.equals("department")) { // 부서명
                andBuilder.and(member.department.contains(skey));
            }
        }
        /* 검색 조건 처리 E */

        Pageable pageable = PageRequest.of(page - 1, limit, Sort.by(desc("createdAt")));

        Page<Member> result = repository.findAll(andBuilder, pageable);
        ListData<Member> data = new ListData<>();
        data.setContent(result.getContent());
        int total = (int)result.getTotalElements();
        Pagination pagination = new Pagination(page, total, 10, limit, request);
        data.setPagination(pagination);

        return data;
    }
}
