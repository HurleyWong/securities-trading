package ac.hurley.counter;

import ac.hurley.counter.util.DBUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CounterApplication {

    @Autowired
    private DBUtil dbUtil;

    public static void main(String[] args) {
        SpringApplication.run(CounterApplication.class, args);
    }

}
