export const rightLeftDiagonalCheck = (score, rowMax) => {
  for (let r = 1; r < rowMax; r++) {
    if (!score[r][rowMax - 1 - r]) return false;
    if (score[r][r] && score[r][r] !== score[r - 1][r + 1]) return false;
  }

  return true;
};

export const leftRightDiagonalCheck = (score, rowMax) => {
  for (let r = 1; r < rowMax; r++) {
    if (!score[r][r]) return false;
    if (score[r][r] && score[r][r] !== score[r - 1][r - 1]) return false;
  }

  return true;
};

export const rowCheck = (score, rowMax) => {
  for (let r = 0; r < rowMax; r++) {
    const currentRow = [...new Set(score[r])];
    if (currentRow.length === 1 && currentRow[0]) return true;
  }

  return false;
};

export const colCheck = (score, rowMax, row, col) => {
  for (let r = 1; r < rowMax; r++) {
    if (!score[r][col]) return false;
    if (score[r][col] && score[r][col] !== score[r - 1][col]) return false;
  }

  return true;
};
