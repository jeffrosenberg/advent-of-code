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
  expected=("10" "1518-11-01" "00:05" "00:25"
            "10" "1518-11-01" "00:30" "00:55"
            "99" "1518-11-02" "00:40" "00:50"
            "10" "1518-11-03" "00:24" "00:29"
            "99" "1518-11-04" "00:36" "00:46"
            "99" "1518-11-05" "00:45" "00:55")
  [[ "${result[0]}" == "${expected[0]}" ]]
  [[ "${result[1]}" == "${expected[1]}" ]]
  [[ "${result[2]}" == "${expected[2]}" ]]
  [[ "${result[3]}" == "${expected[3]}" ]]
  [[ "${result[4]}" == "${expected[4]}" ]]
  [[ "${result[9]}" == "${expected[9]}" ]]
  [[ "${result[10]}" == "${expected[10]}" ]]
  [[ "${result[11]}" == "${expected[11]}" ]]
}

@test "2018 Day 04: guards_count_sleep produces correct output for 00:05 - 00:10" {
  echo '10 1518-11-01 00:05 00:10' > ./temp/puzzleInputParsed.txt
  result=( $(cat "./Temp/puzzleInputParsed.txt" | ../src/2018/201804/guards_count_sleep.sh) )
  expected=("10" "1518-11-01" "00:05" 
            "10" "1518-11-01" "00:06" 
            "10" "1518-11-01" "00:07" 
            "10" "1518-11-01" "00:08" 
            "10" "1518-11-01" "00:09")
  [[ "${result[0]}" == "${expected[0]}" ]]
  [[ "${result[1]}" == "${expected[1]}" ]]
  [[ "${result[2]}" == "${expected[2]}" ]]
  [[ "${result[3]}" == "${expected[3]}" ]]
  [[ "${result[4]}" == "${expected[4]}" ]]
  [[ "${result[9]}" == "${expected[5]}" ]]
  [[ "${result[10]}" == "${expected[8]}" ]]
  [[ "${result[11]}" == "${expected[11]}" ]]
  [[ "${result[14]}" == "${expected[14]}" ]]
}

@test "2018 Day 04: guards_count_sleep produces correct output for multiple lines" {
  echo '10 1518-11-01 00:05 00:10' > ./temp/puzzleInputParsed.txt
  echo '99 1518-11-02 00:40 00:44' >> ./temp/puzzleInputParsed.txt
  result=( $(cat "./Temp/puzzleInputParsed.txt" | ../src/2018/201804/guards_count_sleep.sh) )
  expected=("10" "1518-11-01" "00:05" 
            "10" "1518-11-01" "00:06" 
            "10" "1518-11-01" "00:07" 
            "10" "1518-11-01" "00:08" 
            "10" "1518-11-01" "00:09" 
            "99" "1518-11-02" "00:40" 
            "99" "1518-11-02" "00:41" 
            "99" "1518-11-02" "00:42" 
            "99" "1518-11-02" "00:43")
  [[ "${result[0]}" == "${expected[0]}" ]]
  [[ "${result[1]}" == "${expected[1]}" ]]
  [[ "${result[2]}" == "${expected[2]}" ]]
  [[ "${result[3]}" == "${expected[3]}" ]]
  [[ "${result[4]}" == "${expected[4]}" ]]
  [[ "${result[9]}" == "${expected[5]}" ]]
  [[ "${result[10]}" == "${expected[8]}" ]]
  [[ "${result[11]}" == "${expected[11]}" ]]
  [[ "${result[14]}" == "${expected[14]}" ]]
  [[ "${result[17]}" == "${expected[17]}" ]]
  [[ "${result[20]}" == "${expected[20]}" ]]
  [[ "${result[21]}" == "${expected[21]}" ]]
  [[ "${result[22]}" == "${expected[22]}" ]]
  [[ "${result[23]}" == "${expected[23]}" ]]
}

@test "2018 Day 04: guards_final_results returns final results" {
  ../src/2018/201804/guards_format_inputs.sh "./temp/puzzleInput.txt" | ../src/2018/201804/guards_parse_inputs.sh > ./temp/puzzleInputParsed.txt
  ../src/2018/201804/guards_count_sleep.sh "./temp/puzzleInputParsed.txt" > ./temp/counts.txt
  run ../src/2018/201804/guards_final_results.sh "./temp/counts.txt"
  [[ "${lines[0]}" == "ID of guard: 10" ]]
  [[ "${lines[1]}" == "Minute most asleep: 00:24" ]]
}

# teardown() {
#   rm -f ./Temp/puzzleInput.txt
# }