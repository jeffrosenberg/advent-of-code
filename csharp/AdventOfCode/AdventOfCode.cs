using System;
using System.IO;

namespace AdventOfCode
{
    public class AdventOfCodeConsole
    {
        private static string puzzleInputPath = "../../puzzle-input";

        public static void Main(string[] args)
        {
            string input = File.ReadAllText(puzzleInputPath + "/day01_2017/puzzleInput.txt");
            int captchaResult = Captcha.GetCaptcha(input);
            Console.WriteLine("Day 01 2017:");
            Console.WriteLine(captchaResult);
        }
    }
}
