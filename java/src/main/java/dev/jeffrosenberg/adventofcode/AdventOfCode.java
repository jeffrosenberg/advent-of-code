package dev.jeffrosenberg.adventofcode;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import dev.jeffrosenberg.adventofcode.year_2017.day_201701.Captcha;
import dev.jeffrosenberg.adventofcode.year_2018.day_201807.Instructions;

public class AdventOfCode {
  private static final String puzzleInputPath = "../puzzle-input";

  public static void main(String[] args) throws IOException {
    byte[] encoded;

    // 2017-01
    Path puzzleInput201701 = Paths.get(puzzleInputPath, "2017/201701/puzzleInput.txt");
    encoded = Files.readAllBytes(puzzleInput201701);
    String input = new String(encoded, java.nio.charset.StandardCharsets.UTF_8);

    int captchaResult = Captcha.getCaptcha(input);
    System.out.println("2017 Day 01:");
    System.out.println(captchaResult);

    captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    System.out.println(captchaResult);

    // 2018-07
    Path puzzleInput201807 = Paths.get(puzzleInputPath, "2018/201807/puzzleInput201807.txt");
    List<String> input201807 = Files.readAllLines(puzzleInput201807);

    Instructions instructions = new Instructions();
    for(String lineInput : input201807) {
      instructions.parseInstruction(lineInput);
    }

    String instructionResult = instructions.getOutput();
    System.out.println("2018 Day 07:");
    System.out.println(instructionResult);
  }
}