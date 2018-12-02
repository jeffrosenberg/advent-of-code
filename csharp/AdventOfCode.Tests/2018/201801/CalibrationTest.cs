using System;
using Xunit;
using AdventOfCode;
using System.Collections.Generic;

namespace AdventOfCode.Tests
{
    public class CalibrationTest
    {
        [Theory]
        [InlineData(new int[] { 1, -2, 3, 1 }, 3)]
        [InlineData(new int[] { 1, 1, 1 }, 3)]
        [InlineData(new int[] { 1, 1, -2 }, 0)]
        [InlineData(new int[] { -1, -2, -3 }, -6)]
        public void CorrectlyProvidesCalibrationResultForPart1(int[] input, int expected)
        {
            Calibration calibration = new Calibration(input);
            int result = calibration.GetCalibrationPart1();
            Assert.Equal(expected, result);
        }

        [Fact]
        public void CalibrationThrowsErrorWithNoInput()
        {
            Calibration calibration = new Calibration();
            Assert.Throws<InvalidOperationException>(() => calibration.GetCalibrationPart1());
        }

        [Theory]
        [InlineData(new int[] { 1, -2, 3, 1 }, 2)]
        public void CorrectlyProvidesCalibrationResultForPart2(int[] input, int expected)
        {
            Calibration calibration = new Calibration(input);
            int result = calibration.GetCalibrationPart2();
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData(new string[] { "+1", "-2", "+3", "+1" },
                    new int[] { 1, -2, 3, 1 })]
        [InlineData(new string[] { "+1", "+1", "-2" },
                    new int[] { 1, 1, -2 })]
        public void ConvertsStringArrayToIntArray(string[] input, int[] expected)
        {
            int[] result = CalibrationHelper.ConvertStringArrayToInt(input);
            Assert.Equal(expected, result);
        }
    }
}
