package dev.jeffrosenberg.adventofcode;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import dev.jeffrosenberg.adventofcode.year_2017.day_201701.Captcha;

public class AdventOfCode {
  private static final String puzzleInputPath = "../puzzle-input";

  public static void main(String[] args) throws IOException {
    // 2017-01
    Path puzzleInput = Paths.get(puzzleInputPath, "2017/201701/puzzleInput.txt");
    byte[] encoded = Files.readAllBytes(puzzleInput);
    String input = new String(encoded, java.nio.charset.StandardCharsets.UTF_8);

    int captchaResult = Captcha.getCaptcha(input);
    System.out.println("2017 Day 01:");
    System.out.println(captchaResult);

    captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    System.out.println(captchaResult);
  }
}