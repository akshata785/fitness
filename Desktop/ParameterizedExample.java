// ParameterizedExample.java
public class ParameterizedExample {
    public static void main(String[] args) {
        if (args.length > 0) {
            for (String arg : args) {
                System.out.println("Argument: " + arg);
            }
        } else {
            System.out.println("No arguments provided.");
        }
    }
}
