package com.spring.signup.services;

import com.spring.signup.model.Authority;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface AuthorityService {

    List<Authority> getAllAuthorities();
    void saveAuthority(Authority auth);
    //Authority getAuthorityById(long id);

}
