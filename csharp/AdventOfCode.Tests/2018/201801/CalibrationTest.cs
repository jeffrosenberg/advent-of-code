using System;
using Xunit;
using AdventOfCode;
using System.Collections.Generic;

namespace AdventOfCode.Tests
{
    public class CalibrationTest
    {
        [Fact]
        public void CorrectlyProvidesCalibrationTestCase1()
        {
            int[] input = new int[] { 1, -2, 3, 1 };

            int result = Calibration.GetCalibration(input);
            Assert.Equal(3, result);
        }
    }
}
