// src/pages/Structures.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectStructure,
  setSearchTerm,
  setFilters,
} from '../../store/structure/actions';
import StructureTile from '../../components/structures/structureTile';
import StructureDetail from '../../components/structures/structureDetail';
import StructureFilters from '../../components/structures/structureFilters';
import { LoadingState } from '../../components/common/loadingState';
import ErrorAlert from '../../components/common/errorAlert';
import { Structure } from '../../entities/structure';
import { selectStructures } from '../../store/structure/selectors';

const StructuresPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    structures,
    selectedStructure,
    loading,
    error,
    searchTerm,
    filters,
  } = useSelector(selectStructures);

  const handleStructureSelect = (structure: Structure) => {
    // dispatch(selectStructure(structure));
  };

  const handleSearchChange = (value: string) => {
    // dispatch(setSearchTerm(value));
  };

  const handleFilterChange = (key: string, value: string) => {
    // dispatch(setFilters({ ...filters, [key]: value }));
  };

  const filteredStructures = React.useMemo(() => {
    return structures
      .filter((structure) => {
        // Apply search filter
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            structure.name.toLowerCase().includes(searchLower) ||
            structure.code.toLowerCase().includes(searchLower)
          );
        }
        return true;
      })
      .filter((structure) => {
        // Apply type filter
        if (filters.type && structure.type !== filters.type) {
          return false;
        }
        // Apply region filter
        if (filters.region && structure.location.region !== filters.region) {
          return false;
        }
        return true;
      });
  }, [structures, searchTerm, filters]);

  if (loading) {
    return (
      <div className="p-6">
        <LoadingState message="Loading structures..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <ErrorAlert message={error} />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <StructureFilters
        structures={structures}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Structures Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStructures.map((structure) => (
          <StructureTile
            key={structure.id}
            structure={structure}
            onSelect={handleStructureSelect}
          />
        ))}
      </div>

      {/* Structure Detail Side Panel */}
      <StructureDetail
        structure={selectedStructure}
        // onClose={() => handleStructureSelect(null)}\
        onClose={() => true}
      />
    </div>
  );
};

export default StructuresPage;