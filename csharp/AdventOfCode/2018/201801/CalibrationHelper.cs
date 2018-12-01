using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode
{
    public static class CalibrationHelper
    {
        public static int[] ConvertStringArrayToInt(IEnumerable<string> input)
        {
            int[] result = new int[input.Count()];
            for (var i = 0; i < input.Count(); i++)
            {
                result[i] = Int32.Parse(input.ElementAt(i));
            }
            return result;
        }

        // LINQ running total
        // Source: https://blogs.msdn.microsoft.com/ericwhite/2010/02/15/rollup-extension-method-create-running-totals-using-linq-to-objects/
        public static IEnumerable<TResult> Rollup<TSource, TResult>(
                this IEnumerable<TSource> source,
                TResult seed,
                Func<TSource, TResult, TResult> projection)
        {
            TResult nextSeed = seed;
            foreach (TSource src in source)
            {
                TResult projectedValue = projection(src, nextSeed);
                nextSeed = projectedValue;
                yield return projectedValue;
            }
        }
    }
}
