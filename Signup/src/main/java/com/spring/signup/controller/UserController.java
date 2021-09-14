package com.spring.signup.controller;

import com.spring.signup.model.Authority;
import com.spring.signup.model.User;
import com.spring.signup.services.AuthorityService;
import com.spring.signup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;



@CrossOrigin("*")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }




    // display list of employees
//    @GetMapping("/")
//    public String viewHomePage(Model model) {
//        model.addAttribute("listEmployees", employeeService.getAllEmployees());
//        return "index";
//    }
    @GetMapping("/user")
    public List<User> viewHomePage() {
        //model.addAttribute("listEmployees", employeeService.getAllEmployees());
        List<User> user = userService.getAllUsers();
//        for(int i = 0; i<emp.size(); i++){
//            System.out.println(emp.get(i).getEmail());
//        }
        return user;
    }

    @PostMapping("/saveUser")
    public ResponseEntity<String> saveEmployee(@RequestBody User user) {
        // save employee to database
        List<Authority> authorityList=authorityService.getAllAuthorities();
        user.setPassword(passwordEncoder.encode(user.getPassword()));


        if(user.getEmail() != null){
            user.setAuthorities(authorityList);
            userService.saveUser(user);
            return new ResponseEntity<>("Success", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Please Enter All Fields", HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/employee/{id}")
    public User showFormForUpdate(@PathVariable(value = "id") long id) {

        // get employee from the service
        User user = userService.getUserById(id);

        // set employee as a model attribute to pre-populate the form
        //model.addAttribute("employee", employee);
        return user;
    }

    @GetMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable(value = "id") long id) {

        // call delete employee method
        List<User> user = userService.getAllUsers();
        for(int i = 0; i< user.size(); i++) {
            if (user.get(i).getId() == id) {
                this.userService.deleteUserById(id);
                return new ResponseEntity<>("Success", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("Employee Not found", HttpStatus.NOT_FOUND);
    }

}
