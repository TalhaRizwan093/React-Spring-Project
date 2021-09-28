package com.spring.signup.services;

import com.spring.signup.model.Authority;
import com.spring.signup.model.User;
import com.spring.signup.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorityServiceImpl implements AuthorityService{

    @Autowired
    private AuthorityRepository authRepository;

    @Override
    public List<Authority> getAllAuthorities() {
        return authRepository.findAll();
    }



    @Override
    public void saveAuthority(Authority auth) {
        this.authRepository.save(auth);
    }

//    @Override
//    public Authority getAuthorityById(long id) {
//        Optional< Authority > optional = authRepository.findById(id);
//        Authority auth = null;
//        if (optional.isPresent()) {
//            auth = optional.get();
//        } else {
//            throw new RuntimeException(" Employee not found for id :: " + id);
//        }
//        return auth;
//    }

}
