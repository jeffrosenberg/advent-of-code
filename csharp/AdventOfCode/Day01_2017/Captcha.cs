using System;

namespace AdventOfCode
{
    public class Captcha
    {
        public static int GetCaptcha(string input)
        {
            int result = 0;
            char[] inputChars = input.ToCharArray();
            for(int i = 0; i < inputChars.Length; i++) 
            {
                int j = i + 1;
                if (j >= inputChars.Length) { j = 0; }
                if(inputChars[i] == inputChars[j]) 
                {
                    result += int.Parse(inputChars[i].ToString());
                }
            }

            return result;
        }
    }
}
