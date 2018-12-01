#!/usr/bin/env bats

# setup() {
#   # Use for any unit test setup, i.e.:
#   rm -f ../Temp/*.*
# }

@test "Day 01 2017: Input of 1122 produces sum of 3, step 1" {
  result=$(src/day01_2017/captcha.sh "1122")
  [[ "$result" -eq 3 ]]
}

@test "Day 01 2017: Input of 1111 produces sum of 4, step 1" {
  result=$(src/day01_2017/captcha.sh "1111")
  [[ "$result" -eq 4 ]]
}

@test "Day 01 2017: Input of 1234 produces sum of 0, step 1" {
  result=$(src/day01_2017/captcha.sh "1234")
  [[ "$result" -eq 0 ]]
}

@test "Day 01 2017: Input of 91212129 produces sum of 9, step 1" {
  result=$(src/day01_2017/captcha.sh "91212129")
  [[ "$result" -eq 9 ]]
}

@test "Day 01 2017: Input of 1212 produces sum of 6, step n/2" {
  result=$(src/day01_2017/captcha.sh "1212" "2")
  [[ "$result" -eq 6 ]]
}

@test "Day 01 2017: Input of 1221 produces sum of 0, step n/2" {
  result=$(src/day01_2017/captcha.sh "1221" "2")
  [[ "$result" -eq 0 ]]
}

@test "Day 01 2017: Input of 123425 produces sum of 4, step n/2" {
  result=$(src/day01_2017/captcha.sh "123425" "3")
  [[ "$result" -eq 4 ]]
}

@test "Day 01 2017: Input of 123123 produces sum of 12, step n/2" {
  result=$(src/day01_2017/captcha.sh "123123" "3")
  [[ "$result" -eq 12 ]]
}

@test "Day 01 2017: Input of 12131415 produces sum of 4, step n/2" {
  result=$(src/day01_2017/captcha.sh "12131415" "4")
  [[ "$result" -eq 4 ]]
}