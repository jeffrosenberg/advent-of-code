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
        public void CorrectlyProvidesCalibrationResult(int[] input, int expected)
        {
            int result = Calibration.GetCalibration(input);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData(new string[] { "+1", "-2", "+3", "+1" }, 
                    new int[]    { 1, -2, 3, 1 })]
        public void ConvertsStringArrayToIntArray(string[] input, int[] expected)
        {
            int[] result = Calibration.ConvertString(input);
            Assert.Equal(expected, result);
        }
    }
}
