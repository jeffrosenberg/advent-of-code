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
        public void CorrectlyProvidesCalibrationResult(int[] input, int expected)
        {
            int result = Calibration.GetCalibration(input);
            Assert.Equal(expected, result);
        }
    }
}
