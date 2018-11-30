package dev.jeffrosenberg.adventofcode.day01_2017;

public class Captcha {
  public static int getCaptcha(String input) {
    int result = 0;
    char[] inputChars = input.toCharArray();
    for(int i = 0; i < inputChars.length; i++) {
      int j = i + 1;
      if (j >= inputChars.length) { j = 0; }
      if(inputChars[i] == inputChars[j]) {
        result += Character.getNumericValue(inputChars[i]);
      }
    }

    return result;
  }
}