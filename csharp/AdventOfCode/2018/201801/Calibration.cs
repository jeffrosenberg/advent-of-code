using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode
{
    public class Calibration
    {
        public IEnumerable<int> Input { get; set; }

        public Calibration() { }
        public Calibration(IEnumerable<int> input)
        {
            this.Input = input;
        }

        public int GetCalibrationPart1()
        {
            if (this.Input == null)
            {
                throw new InvalidOperationException("Input has not been set");
            }

            return this.Input.Sum();
        }

        public int GetCalibrationPart2()
        {
            int i = 0;
            int result = 0;
            int size = this.Input.Count();
            List<int> usedValues = new List<int> { 0 }; // Start with 0 already populated

            while (true)
            {
                // Use modular arithmetic to allow this to continue
                // working even as we increment `i` above `size`
                result += Input.ElementAt(i++ % size);
                if (usedValues.Contains(result))
                {
                    break;
                }
                else
                {
                    usedValues.Add(result);
                }
            }

            return result;
        }
    }
}
