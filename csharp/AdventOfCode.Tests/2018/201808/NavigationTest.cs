using System;
using Xunit;
using AdventOfCode;
using System.Collections.Generic;

namespace AdventOfCode.Tests
{
    public class NavigationTest
    {
        [Theory]
        [InlineData(new int[] { 2, 3, 0, 3, 10, 11, 12, 1, 1, 0, 1, 99, 2, 1, 1, 2, }, 138)]
        public void CorrectlyProvidesMetadataSumForPart1(int[] input, int expected)
        {
            Navigation navigation = new Navigation(input);
            int result = navigation.GetMetadataSum();
            Assert.Equal(expected, result);
        }
    }
}
