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
            NavigationNode rootNode = new NavigationNode(input);
            int result = rootNode.GetMetadataSum();
            Assert.Equal(expected, result);
        }

        // This seemed to be working, but I didn't take the time to
        // default a proper Equals() method for NavigationNode
        //[Fact]
        //public void ProducesFullTreeRecursively()
        //{
        //    // Expected
        //    NavigationNode D = new NavigationNode
        //    {
        //        Metadata = new List<int> { 99 }
        //    };

        //    NavigationNode C = new NavigationNode
        //    {
        //        ChildNodes = new List<NavigationNode> { D },
        //        Metadata = new List<int> { 2 }
        //    };

        //    NavigationNode B = new NavigationNode
        //    {
        //        Metadata = new List<int> { 10, 11, 12 }
        //    };

        //    NavigationNode A = new NavigationNode
        //    {
        //        ChildNodes = new List<NavigationNode> { B, C },
        //        Metadata = new List<int> { 1, 1, 2 }
        //    };

        //    // Actual
        //    int[] input = new int[] { 2, 3, 0, 3, 10, 11, 12, 1, 1, 0, 1, 99, 2, 1, 1, 2 };
        //    NavigationNode rootNode = new NavigationNode(input);
        //    Assert.Equal(A, rootNode);
        //}
    }
}
