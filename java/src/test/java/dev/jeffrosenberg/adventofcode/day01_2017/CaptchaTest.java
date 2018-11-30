package dev.jeffrosenberg.adventofcode.day01_2017;

import static org.junit.Assert.assertEquals;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import dev.jeffrosenberg.adventofcode.day01_2017.Captcha;

public class CaptchaTest {
  @Rule
  public final ExpectedException exception = ExpectedException.none();

  @Test
  public void InputOf1122ProducesSumOf3() {
    int captchaResult = Captcha.getCaptcha("1122");
    assertEquals(3, captchaResult);
  }

  @Test
  public void InputOf1111ProducesSumOf4() {
    int captchaResult = Captcha.getCaptcha("1111");
    assertEquals(4, captchaResult);
  }

  @Test
  public void InputOf1234ProducesSumOf0() {
    int captchaResult = Captcha.getCaptcha("1234");
    assertEquals(0, captchaResult);
  }

  @Test
  public void InputOf91212129ProducesSumOf9() {
    int captchaResult = Captcha.getCaptcha("91212129");
    assertEquals(9, captchaResult);
  }
}