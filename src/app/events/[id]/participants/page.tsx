import { notFound } from 'next/navigation';
import ManageHeader from '@/systems/manage/ManageHeader';
import MemberList from '@/systems/manage/MemberList';
import { api } from '@/trpc/server';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = await api.event.byId({ eventId: id }); //!
  if (!event) {
    notFound();
  }

  const participants = await api.event.manage.getParticipants({
    eventId: event.id,
  }); //!

  return (
    <main>
      <ManageHeader //make a participant header
        event={event}
        path={[{ text: 'Followers', href: `/events/${id}/participants` }]}
        hrefBack={`/events/${id}/`}
      />
      <div className="flex w-full flex-col items-center">
        <MemberList
          members={participants}
          event={event}
          listType={'participant'}
        />
      </div>
    </main>
  );
}
