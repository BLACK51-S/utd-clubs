'use client';

import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Link from 'next/link';
import { getGcalEventLink } from '@/lib/modules/googleCalendar/getGcalEventLink';

export default function ParticipantListButton({
  isHeader,
  clubSlug,
  eventId,
  calendarId,
  userEmail,
  fromGoogle,
}: {
  isHeader?: boolean;
  clubSlug: string;
  eventId: string;
  calendarId: string | null;
  userEmail: string;
  fromGoogle: boolean;
}) {
  return (
    <Button
      LinkComponent={Link}
      href={`/events/${event.id}/participants`}
      variant="contained"
      size={isHeader ? 'large' : 'small'}
      className={`normal-case ${isHeader ? 'bg-white hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700' : 'bg-white hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-600'} text-haiti dark:text-white`}
      //startIcon={<EditIcon />}
    >
      View Participants
    </Button>
  );
}
