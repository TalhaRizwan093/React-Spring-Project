package com.spring.signup.services;
import com.spring.signup.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List <User> getAllUsers();
    void saveUser(User user);
    User getUserById(long id);
    void deleteUserById(long id);

}
