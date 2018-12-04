#!/bin/bash
sort -k1 < "${1:-/dev/stdin}" | sed s/"\["// | sed s/"\][ ]*"/$'\t'/