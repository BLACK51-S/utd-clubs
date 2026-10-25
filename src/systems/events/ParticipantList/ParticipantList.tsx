'use client';

import type { GridColDef } from '@mui/x-data-grid';
import type {
  SelectEvent,
  SelectUserMetadataToEventsWithUserMetadataWithUser,
} from '@/server/db/models';
import ListGrid from './ListGrid';

type ParticipantListProps = {
  participants: SelectUserMetadataToEventsWithUserMetadataWithUser[];
  //columns: GridColDef[];
  event: SelectEvent;
};

const ParticipantList = ({
  participants,
  //columns,
  event,
}: ParticipantListProps) => {
  const rows = participants.map((participant) => ({
    ...participant,
    id: participant.userId,
  }));

  return (
    <div className="flex w-full max-w-6xl flex-col gap-8">
      <ListGrid
        rows={rows}
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
