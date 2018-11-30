#!/usr/bin/env bats

# setup() {
#   # Use for any unit test setup, i.e.:
#   rm -f ../Temp/*.*
# }

@test "Day 01 2017: Input of 1122 produces sum of 3" {
  result=$(src/day01_2017/captcha.sh "1122")
  [ "$result" -eq 3 ]
}

@test "Day 01 2017: Input of 1111 produces sum of 4" {
  result=$(src/day01_2017/captcha.sh "1111")
  [ "$result" -eq 4 ]
}

@test "Day 01 2017: Input of 1234 produces sum of 0" {
  result=$(src/day01_2017/captcha.sh "1234")
  [ "$result" -eq 0 ]
}

@test "Day 01 2017: Input of 91212129 produces sum of 9" {
  result=$(src/day01_2017/captcha.sh "91212129")
  [ "$result" -eq 9 ]
}