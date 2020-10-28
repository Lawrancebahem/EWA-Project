package rest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/info")
@RestController()
public class Controller {


    @GetMapping("/test")
    public String SayHello(){
        return "Hello !!!!";
    }
}
