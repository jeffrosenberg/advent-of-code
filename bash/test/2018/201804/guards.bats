#!/usr/bin/env bats

setup() {
  # Prepare test input
  rm -f ./Temp/*.*

  # Unorder the test inputs
  echo '[1518-11-01 00:00] Guard #10 begins shift
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-05 00:45] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:55] wakes up' > ./temp/puzzleInput.txt
}

@test "2018 Day 04: guards_format_inputs sorts and formats" {
  #Remove space from IFS to keep timestamps together
  IFS=$'\t\n'
  result=( $(../src/2018/201804/guards_format_inputs.sh "./Temp/puzzleInput.txt") )
  expected=("1518-11-01 00:00" "Guard #10 begins shift"
            "1518-11-01 00:05" "falls asleep"
            "1518-11-01 00:25" "wakes up"
            "1518-11-01 00:30" "falls asleep"
            "1518-11-01 00:55" "wakes up"
            "1518-11-01 23:58" "Guard #99 begins shift"
            "1518-11-02 00:40" "falls asleep"
            "1518-11-02 00:50" "wakes up"
            "1518-11-03 00:05" "Guard #10 begins shift"
            "1518-11-03 00:24" "falls asleep"
            "1518-11-03 00:29" "wakes up"
            "1518-11-04 00:02" "Guard #99 begins shift"
            "1518-11-04 00:36" "falls asleep"
            "1518-11-04 00:46" "wakes up"
            "1518-11-05 00:03" "Guard #99 begins shift"
            "1518-11-05 00:45" "falls asleep"
            "1518-11-05 00:55" "wakes up")
  [[ "${result[0]}" == "${expected[0]}" ]]
  [[ "${result[1]}" == "${expected[1]}" ]]
  [[ "${result[2]}" == "${expected[2]}" ]]
  [[ "${result[3]}" == "${expected[3]}" ]]
  [[ "${result[4]}" == "${expected[4]}" ]]
  [[ "${result[9]}" == "${expected[9]}" ]]
  [[ "${result[10]}" == "${expected[10]}" ]]
  [[ "${result[11]}" == "${expected[11]}" ]]
}

@test "2018 Day 04: guards_parse_inputs parses and restructures inputs" {
  result=( $(../src/2018/201804/guards_format_inputs.sh "./Temp/puzzleInput.txt" | ../src/2018/201804/guards_parse_inputs.sh) )
  expected=("10" "1518-11-01 00:05" "1518-11-01 00:25"
            "10" "1518-11-01 00:30" "1518-11-01 00:55"
            "99" "1518-11-02 00:40" "1518-11-02 00:50"
            "10" "1518-11-03 00:24" "1518-11-03 00:29"
            "99" "1518-11-04 00:36" "1518-11-04 00:46"
            "99" "1518-11-05 00:45" "1518-11-05 00:55")
  [[ "${result[0]}" == "${expected[0]}" ]]
  [[ "${result[1]}" == "${expected[1]}" ]]
  [[ "${result[2]}" == "${expected[2]}" ]]
  [[ "${result[3]}" == "${expected[3]}" ]]
  [[ "${result[4]}" == "${expected[4]}" ]]
  [[ "${result[9]}" == "${expected[9]}" ]]
  [[ "${result[10]}" == "${expected[10]}" ]]
  [[ "${result[11]}" == "${expected[11]}" ]]
}

# teardown() {
#   rm -f ./Temp/puzzleInput.txt
# }