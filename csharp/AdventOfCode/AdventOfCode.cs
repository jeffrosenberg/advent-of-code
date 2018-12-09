using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    public class AdventOfCodeConsole
    {
        private static string puzzleInputPath = "../../puzzle-input";

        public static void Main(string[] args)
        {
            // 2017-01
            string input = File.ReadAllText(puzzleInputPath + "/2017/201701/puzzleInput.txt");
            int captchaResult = Captcha.GetCaptcha(input);
            Console.WriteLine("2017 Day 01:");
            Console.WriteLine(captchaResult);
            captchaResult = Captcha.GetCaptcha(input, input.Length / 2);
            Console.WriteLine(captchaResult);

            // 2018-01
            string[] input201801 =
                File.ReadAllLines(puzzleInputPath + "/2018/201801/puzzleInput201801.txt");
            int[] input201801int = CalibrationHelper.ConvertStringArrayToInt(input201801);

            Calibration calibration = new Calibration(input201801int);

            Console.WriteLine("2018 Day 01:");
            Console.WriteLine(calibration.GetCalibrationPart1());
            Console.WriteLine(calibration.GetCalibrationPart2());

            // 2018-08
            string input201808 =
                File.ReadAllText(puzzleInputPath + "/2018/201808/puzzleInput201808.txt");
            int[] input201808int = ConvertStringToIntArray(input201808);

            NavigationNode rootNode = new NavigationNode(input201808int);

            Console.WriteLine("2018 Day 08:");
            Console.WriteLine(rootNode.GetMetadataSumPart1());
            Console.WriteLine(rootNode.GetMetadataSumPart2());
        }

        private static int[] ConvertStringToIntArray(string input)
        {
            string[] inputSplit = input.Split(' ');
            int[] result = new int[input.Count()];
            for (var i = 0; i < inputSplit.Count(); i++)
            {
                result[i] = Int32.Parse(inputSplit.ElementAt(i));
            }
            return result;
        }
    }
}
