using System;
using Xunit;
using AdventOfCode;

namespace AdventOfCode.Tests
{
    public class CaptchaTest
    {
        [Theory]
        [InlineData("1122", 3)]
        [InlineData("1111", 4)]
        [InlineData("1234", 0)]
        [InlineData("91212129", 9)]
        public void CorrectlyCalculatesCaptchaWithStep1(string value, int expected)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("1212", 6)]
        [InlineData("1221", 0)]
        [InlineData("123425", 4)]
        [InlineData("12131415", 4)]
        [InlineData("123123", 12)]
        public void CorrectlyCalculatesCaptchaWithStepNdiv2(string value, int expected)
        {
            int result = Captcha.GetCaptcha(value, value.Length / 2);
            Assert.Equal(expected, result);
        }
    }
}
