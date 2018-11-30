using System;
using Xunit;
using AdventOfCode;

namespace AdventOfCode.Tests
{
    public class CaptchaTest
    {
        [Theory]
        [InlineData("1122")]
        public void InputOf1122ProducesSumOf3(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(3, result);
        }

        [Theory]
        [InlineData("1111")]
        public void InputOf1111ProducesSumOf4(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(4, result);
        }

        [Theory]
        [InlineData("1234")]
        public void InputOf1234ProducesSumOf0(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(0, result);
        }

        [Theory]
        [InlineData("91212129")]
        public void InputOf91212129ProducesSumOf9(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(9, result);
        }
    }
}
