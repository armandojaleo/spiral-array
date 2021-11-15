function spiralArray(N) {
      var t = N * N;
      var a = new Array(N).fill(0).map(_ => new Array(N).fill(0));
  
      var d = 1;
      var y = 0;
      var x = 0;
  
      for (var i = 1; i <= t; i++) {
          if (a[y][x] !== 0) { 
              if (d === 1) { x--; y++; d = 2; }
              else if (d === 2) { y--; x--; d = 3; }
              else if (d === 3) { x++; y--; d = 4; }
              else if (d === 4) { y++; x++; d = 1; }
          }
          a[y][x] = i;

          if 
            (
              i > 1 &&
                (
                  (x % (N - 1) === 0 && y === 0) ||
                  (y % (N - 1) === 0 && x === (N - 1)) ||
                  (x === 0 && y === (N - 1))
                )
              ) 
          { d++; }
  
          if (d === 1) { x++; }
          if (d === 2) { y++; }
          if (d === 3) { x--; }
          if (d === 4) { y--; }
      }
      return a;
  }
