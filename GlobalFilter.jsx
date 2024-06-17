import React, { useState } from 'react';

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
              { key: "1.1.1.1", text: "Counterparty Text 1" },
              { key: "1.1.1.2", text: "Counterparty Text 2" },
            ],
          },
          {
            key: "1.1.2",
            text: "LegalEntity Text 2",
            Counterparty: [
              { key: "1.1.2.1", text: "Counterparty Text 3" },
              { key: "1.1.2.2", text: "Counterparty Text 4" },
            ],
          },
        ],
      },
    ],
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
              { key: "2.1.1.1", text: "Counterparty Text 5" },
              { key: "2.1.1.2", text: "Counterparty Text 6" },
            ],
          },
        ],
      },
    ],
  },
];

const Dropdown = ({ options, selectedKey, handleChange }) => (
  <select value={selectedKey} onChange={(e) => handleChange(e.target.value)}>
    <option value="">Select an option</option>
    {options.map((option) => (
      <option key={option.key} value={option.key}>
        {option.text}
      </option>
    ))}
  </select>
);

const GlobalFilter = () => {
  const [selectedMain, setSelectedMain] = useState('');
  const [selectedCSR, setSelectedCSR] = useState('');
  const [selectedLegalEntity, setSelectedLegalEntity] = useState('');
  const [selectedCounterparty, setSelectedCounterparty] = useState('');

  const handleMainChange = (key) => {
    setSelectedMain(key);
    setSelectedCSR('');
    setSelectedLegalEntity('');
    setSelectedCounterparty('');
  };

  const handleCSRChange = (key) => {
    setSelectedCSR(key);
    setSelectedLegalEntity('');
    setSelectedCounterparty('');
  };

  const handleLegalEntityChange = (key) => {
    setSelectedLegalEntity(key);
    setSelectedCounterparty('');
  };

  const handleCounterpartyChange = (key) => {
    setSelectedCounterparty(key);
  };

  const selectedMainObj = data.find((item) => item.key === selectedMain);
  const selectedCSRObj = selectedMainObj?.CSR.find((item) => item.key === selectedCSR);
  const selectedLegalEntityObj = selectedCSRObj?.LegalEntity.find((item) => item.key === selectedLegalEntity);

  return (
    <div>
      <h1>Global Filter</h1>
      <Dropdown options={data} selectedKey={selectedMain} handleChange={handleMainChange} />

      <Dropdown
        options={selectedMainObj?.CSR || []}
        selectedKey={selectedCSR}
        handleChange={handleCSRChange}
      />

      <Dropdown
        options={selectedCSRObj?.LegalEntity || []}
        selectedKey={selectedLegalEntity}
        handleChange={handleLegalEntityChange}
      />

      <Dropdown
        options={selectedLegalEntityObj?.Counterparty || []}
        selectedKey={selectedCounterparty}
        handleChange={handleCounterpartyChange}
      />
    </div>
  );
};

export default GlobalFilter;
