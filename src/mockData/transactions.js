export default {
  headers: [
    { key: 'transaction', label: 'TRANSACTIONS' },
    { key: 'dateTime', label: 'DATE & TIME' },
    { key: 'amount', label: 'AMOUNT' },
    { key: 'status', label: 'STATUS' },
  ],
  tableRows: [
    {
      transactionType: 'receive',
      name: 'Bonnie Green',
      dateTime: '2023-04-23',
      amount: '$2300',
      status: 'completed',
    },
    {
      transactionType: 'refund',
      name: 'Bonnie Green',
      dateTime: '2023-04-23',
      amount: '$670',
      status: 'completed',
    },

    {
      transactionType: 'failed',
      name: 'Jese Leos',
      dateTime: '2023-04-18',
      amount: '$234',
      status: 'cancelled',
    },
    {
      transactionType: 'processing',
      name: 'Bonnie Green',
      dateTime: '2023-04-15',
      amount: '$5000',
      status: 'in progress',
    },
    {
      transactionType: 'processing',
      name: 'Jese Leos',
      dateTime: '2023-04-15',
      amount: '$2300',
      status: 'in progress',
    },
    {
      transactionType: 'receive',
      name: 'THEMSBERG LLC',
      dateTime: '2023-04-11',
      amount: '$280',
      status: 'completed',
    },
  ],
};
