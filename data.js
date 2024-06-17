// data.js
const data = [
  {
    key: "1",
    text: "Main Text 1",
    CSR: [
      {
        key: "1.1",
        text: "CSR Text 1",
        LegalEntity: [
          {
            key: "1.1.1",
            text: "LegalEntity Text 1",
            Counterparty: [
              {
                key: "1.1.1.1",
                text: "Counterparty Text 1"
              },
              {
                key: "1.1.1.2",
                text: "Counterparty Text 2"
              }
            ]
          },
          {
            key: "1.1.2",
            text: "LegalEntity Text 2",
            Counterparty: [
              {
                key: "1.1.2.1",
                text: "Counterparty Text 3"
              },
              {
                key: "1.1.2.2",
                text: "Counterparty Text 4"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    key: "2",
    text: "Main Text 2",
    CSR: [
      {
        key: "2.1",
        text: "CSR Text 2",
        LegalEntity: [
          {
            key: "2.1.1",
            text: "LegalEntity Text 3",
            Counterparty: [
              {
                key: "2.1.1.1",
                text: "Counterparty Text 5"
              },
              {
                key: "2.1.1.2",
                text: "Counterparty Text 6"
              }
            ]
          }
        ]
      }
    ]
  }
];

export default data;
