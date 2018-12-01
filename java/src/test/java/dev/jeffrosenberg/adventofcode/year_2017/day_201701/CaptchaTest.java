package dev.jeffrosenberg.adventofcode.year_2017.day_201701;

import static org.junit.Assert.assertEquals;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import dev.jeffrosenberg.adventofcode.year_2017.day_201701.Captcha;

public class CaptchaTest {
  @Rule
  public final ExpectedException exception = ExpectedException.none();

  @Test
  public void InputOf1122ProducesSumOf3WithStep1() {
    int captchaResult = Captcha.getCaptcha("1122");
    assertEquals(3, captchaResult);
  }

  @Test
  public void InputOf1111ProducesSumOf4WithStep1() {
    int captchaResult = Captcha.getCaptcha("1111");
    assertEquals(4, captchaResult);
  }

  @Test
  public void InputOf1234ProducesSumOf0WithStep1() {
    int captchaResult = Captcha.getCaptcha("1234");
    assertEquals(0, captchaResult);
  }

  @Test
  public void InputOf91212129ProducesSumOf9WithStep1() {
    int captchaResult = Captcha.getCaptcha("91212129");
    assertEquals(9, captchaResult);
  }

  @Test
  public void InputOf1212ProducesSumOf6WithStepNdiv2() {
    String input = "1212";
    int captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    assertEquals(6, captchaResult);
  }

  @Test
  public void InputOf1221ProducesSumOf0WithStepNdiv2() {
    String input = "1221";
    int captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    assertEquals(0, captchaResult);
  }

  @Test
  public void InputOf123425ProducesSumOf4WithStepNdiv2() {
    String input = "123425";
    int captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    assertEquals(4, captchaResult);
  }

  @Test
  public void InputOf123123ProducesSumOf12WithStepNdiv2() {
    String input = "123123";
    int captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    assertEquals(12, captchaResult);
  }

  @Test
  public void InputOf12131415ProducesSumOf4WithStepNdiv2() {
    String input = "12131415";
    int captchaResult = Captcha.getCaptcha(input, (input.length())/2);
    assertEquals(4, captchaResult);
  }
}