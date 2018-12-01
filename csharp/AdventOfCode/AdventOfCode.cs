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
        }
    }
}
