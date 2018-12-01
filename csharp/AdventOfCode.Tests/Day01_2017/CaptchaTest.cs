using System;
using Xunit;
using AdventOfCode;

namespace AdventOfCode.Tests
{
    public class CaptchaTest
    {
        [Theory]
        [InlineData("1122")]
        public void SumOf3WithStep1(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(3, result);
        }

        [Theory]
        [InlineData("1111")]
        public void SumOf4WithStep1(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(4, result);
        }

        [Theory]
        [InlineData("1234")]
        public void SumOf0WithStep1(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(0, result);
        }

        [Theory]
        [InlineData("91212129")]
        public void SumOf9WithStep1(string value)
        {
            int result = Captcha.GetCaptcha(value);
            Assert.Equal(9, result);
        }

        [Theory]
        [InlineData("1212")]
        public void SumOf6WithStepNdiv2(string value)
        {
            int result = Captcha.GetCaptcha(value, value.Length / 2);
            Assert.Equal(6, result);
        }

        [Theory]
        [InlineData("1221")]
        public void SumOf0WithStepNdiv2(string value)
        {
            int result = Captcha.GetCaptcha(value, value.Length / 2);
            Assert.Equal(0, result);
        }

        [Theory]
        [InlineData("123425")]
        [InlineData("12131415")]
        public void SumOf4WithStepNdiv2(string value)
        {
            int result = Captcha.GetCaptcha(value, value.Length / 2);
            Assert.Equal(4, result);
        }

        [Theory]
        [InlineData("123123")]
        public void SumOf12WithStepNdiv2(string value)
        {
            int result = Captcha.GetCaptcha(value, value.Length / 2);
            Assert.Equal(12, result);
        }
    }
}
