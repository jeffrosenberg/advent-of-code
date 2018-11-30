# Bash
This section includes solutions written in Bash.

## Unit tests
Unit testing in Bash is tougher than in some other languages. I'm using BATS (https://github.com/sstephenson/bats) for my unit tests. I've added BATS to the project as a Git submodule, under bash/test/lib. To invoke, you'll need to either add to your path or invoke as follows:

```bash
lib/bats/bin/bats day??/testScript.bats
```