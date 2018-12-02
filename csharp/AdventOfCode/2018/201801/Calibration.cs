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
            throw new NotImplementedException();
        }
    }
}
