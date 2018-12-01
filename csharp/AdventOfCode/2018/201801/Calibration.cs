using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode
{
    public static class Calibration
    {
        public static int GetCalibration(IEnumerable<int> input)
        {
            return input.Sum();
        }

        public static int[] ConvertString(IEnumerable<string> input)
        {
            int[] result = new int[4];
            for(var i = 0; i < input.Count(); i++)
            {
                result[i] = Int32.Parse(input.ElementAt(i));
            }
            return result;
        }
    }
}
