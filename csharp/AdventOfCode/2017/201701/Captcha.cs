using System;

namespace AdventOfCode
{
    public class Captcha
    {
        public static int GetCaptcha(string input, int step = 1)
        {
            int result = 0;
            char[] inputChars = input.ToCharArray();
            for(int i = 0; i < inputChars.Length; i++) 
            {
                int j = ((i + step) % inputChars.Length);
                if(inputChars[i] == inputChars[j]) 
                {
                    result += int.Parse(inputChars[i].ToString());
                }
            }

            return result;
        }
    }
}
