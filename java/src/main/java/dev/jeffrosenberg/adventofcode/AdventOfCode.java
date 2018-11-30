package dev.jeffrosenberg.adventofcode;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import dev.jeffrosenberg.adventofcode.day01_2017.Captcha;

public class AdventOfCode {
  private static final String puzzleInputPath = "../puzzle-input";

  public static void main(String[] args) throws IOException {
    byte[] encoded = Files.readAllBytes(Paths.get(puzzleInputPath, "day01_2017/puzzleInput.txt"));
    String input = new String(encoded, java.nio.charset.StandardCharsets.UTF_8);
    int captchaResult = Captcha.getCaptcha(input);
    System.out.println("Day 01 2017:");
    System.out.println(captchaResult);
  }
}