package org.nemoftp.models.member;

import lombok.RequiredArgsConstructor;
import org.nemoftp.api.controllers.dtos.RequestJoin;
import org.nemoftp.api.controllers.validators.JoinValidator;
import org.nemoftp.entities.Member;
import org.nemoftp.repositories.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;

@Service
@RequiredArgsConstructor
public class MemberSaveService {
    private final MemberRepository repository;
    private final PasswordEncoder encoder;
    private final JoinValidator validator;

    /**
     * 회원가입 처리
     * @param form
     * @param errors
     */
    public Member join(RequestJoin form, Errors errors) {
        validator.validate(form, errors);

        if (errors.hasErrors()) {
            return null;
        }

        String hash = encoder.encode(form.password());

        Member member = Member.builder()
                .email(form.email())
                .name(form.name())
                .cellPhone(form.cellPhone())
                .password(hash)
                .build();

        save(member);

        member = repository.findByEmail(form.email());
        return member;
    }

    public void save(Member member) {
        repository.saveAndFlush(member);
    }

}
