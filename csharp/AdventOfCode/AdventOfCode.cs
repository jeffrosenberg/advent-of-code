using System;
using System.IO;

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
        }
    }
}
