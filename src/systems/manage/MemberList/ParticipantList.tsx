'use client';

import type { GridColDef } from '@mui/x-data-grid';
import type { SelectUserMetadataToEventsWithUserMetadataWithUser } from '@/server/db/models';
import ListGrid from './ListGrid';

type ParticipantListProps = {
  participants: SelectUserMetadataToEventsWithUserMetadataWithUser[];
  columns: GridColDef[];
};

const ParticipantList = ({ participants, columns }: ParticipantListProps) => {
  return (
    <div className="flex w-full max-w-6xl flex-col gap-8">
      <ListGrid
        rows={participants}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25 },
          },
        }}
      />
    </div>
  );
};

export default ParticipantList;
