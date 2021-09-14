package com.spring.signup.controller;


import com.spring.signup.model.Authority;


import com.spring.signup.services.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
public class AuthorityController {

    @Autowired
    private AuthorityService authorityService;

    @GetMapping("/authority")
    public List<Authority> getAuthorityData() {
        //model.addAttribute("listEmployees", employeeService.getAllEmployees());
        List<Authority> auth = authorityService.getAllAuthorities();
//        for(int i = 0; i<emp.size(); i++){
//            System.out.println(emp.get(i).getEmail());
//        }
        return auth;
    }

    @PostMapping("/saveAuthority")
    public ResponseEntity<String> saveAuthority(@RequestBody Authority auth) {
        // save employee to database


        if(auth.getRoleCode() != null){
            authorityService.saveAuthority(auth);
            return new ResponseEntity<>("Success", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Please Enter All Fields", HttpStatus.BAD_REQUEST);
        }

    }


}
