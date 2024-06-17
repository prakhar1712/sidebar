import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import data from './data.js'; // Import the data from data.js

const GlobalFilter = () => {
    // State for selected values
    const [selectedMain, setSelectedMain] = useState(null);
    const [selectedCSR, setSelectedCSR] = useState(null);
    const [selectedLegalEntity, setSelectedLegalEntity] = useState(null);
    const [selectedCounterparty, setSelectedCounterparty] = useState(null);

    // Extract options for each level based on the current selection
    const getCSRDropdownOptions = () => {
        if (!selectedMain) return [];
        const mainItem = data.find(item => item.key === selectedMain.value);
        return mainItem ? mainItem.CSR.map(csr => ({ label: csr.text, value: csr.key })) : [];
    };

    const getLegalEntityDropdownOptions = () => {
        if (!selectedCSR) return [];
        const mainItem = data.find(item => item.key === selectedMain.value);
        const csrItem = mainItem?.CSR.find(csr => csr.key === selectedCSR.value);
        return csrItem ? csrItem.LegalEntity.map(le => ({ label: le.text, value: le.key })) : [];
    };

    const getCounterpartyDropdownOptions = () => {
        if (!selectedLegalEntity) return [];
        const mainItem = data.find(item => item.key === selectedMain.value);
        const csrItem = mainItem?.CSR.find(csr => csr.key === selectedCSR.value);
        const leItem = csrItem?.LegalEntity.find(le => le.key === selectedLegalEntity.value);
        return leItem ? leItem.Counterparty.map(cp => ({ label: cp.text, value: cp.key })) : [];
    };

    return (
        <div>
            <Dropdown
                options={data.map(item => ({ label: item.text, value: item.key }))}
                onChange={(selection) => {
                    setSelectedMain(selection);
                    setSelectedCSR(null); // Reset subsequent selections
                    setSelectedLegalEntity(null);
                    setSelectedCounterparty(null);
                }}
                value={selectedMain}
                placeholder="Select Main"
            />

            <Dropdown
                options={getCSRDropdownOptions()}
                onChange={(selection) => {
                    setSelectedCSR(selection);
                    setSelectedLegalEntity(null); // Reset subsequent selections
                    setSelectedCounterparty(null);
                }}
                value={selectedCSR}
                placeholder="Select CSR"
            />

            <Dropdown
                options={getLegalEntityDropdownOptions()}
                onChange={(selection) => {
                    setSelectedLegalEntity(selection);
                    setSelectedCounterparty(null); // Reset subsequent selection
                }}
                value={selectedLegalEntity}
                placeholder="Select Legal Entity"
            />

            <Dropdown
                options={getCounterpartyDropdownOptions()}
                onChange={(selection) => setSelectedCounterparty(selection)}
                value={selectedCounterparty}
                placeholder="Select Counterparty"
            />
        </div>
    );
};

export default GlobalFilter;
