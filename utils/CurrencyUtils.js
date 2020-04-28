const obj = {
  formatMoney: (cell) =>
    isNaN(cell)
      ? cell
      : cell.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
}

export default obj
