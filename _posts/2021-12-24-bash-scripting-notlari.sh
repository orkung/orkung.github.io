#!/usr/bin/env bash

##### organizin shell script

# Title:         catch error log
# Description:   specific log comes here
# Author:        Orkun <cavit.gunay@vodafone.com>
# Date:          2021-12-28
# Version:       1.0.0

# Exit codes
# ==========
# 0   no error
# 1   script interrupted
# 2   error description


for item in {"Hello World!",a,bc,1372}; do
   echo "${item}"
done

[ condition ] && command

case "${item}" in
   1)
      echo "item = 1"
   ;;
   2|3)
      echo "item = 2 or item = 3"
   ;;
   *)
      echo "default (none of above)"
   ;;
esac

tcpdump -vv -s 0 -w /tmp/diameter.pcap