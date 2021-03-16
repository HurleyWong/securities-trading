package ac.hurley.counter.controller;

import ac.hurley.counter.util.DBUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

//    @Autowired
//    private DBUtil dbUtil;

    @Autowired
    private StringRedisTemplate template;

    @RequestMapping("redis")
    public String redis() {
        template.opsForValue().set("test:Hello", "World");
        return template.opsForValue().get("test:Hello");
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello world";
    }

    @RequestMapping("/db")
    public String db() {
        return "" + DBUtil.getId();
    }
}
