package dev.jeffrosenberg.adventofcode.year_2017.day_201701;

public class Captcha {
  public static int getCaptcha(String input) {
    return getCaptcha(input, 1);
  }

  public static int getCaptcha(String input, int step) {
    int result = 0;
    char[] inputChars = input.toCharArray();

    for(int i = 0; i < inputChars.length; i++) {
      int j = ((i + step) % inputChars.length);
      if (j >= inputChars.length) { j = 0; }
      if(inputChars[i] == inputChars[j]) {
        result += Character.getNumericValue(inputChars[i]);
      }
    }

    return result;
  }
}