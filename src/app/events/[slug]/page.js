import { getEvent, getCommentsByEvent } from "@/lib/api";
import DetailView from "@/components/DetailView";
import Comments from "@/components/Comments";
import CommentForm from "@/components/CommentForm";

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  const comments = await getCommentsByEvent(event.id);

  return (
    <main>
      <DetailView event={event} />
      <Comments comments={comments} />
      <CommentForm eventId={event.id} />
    </main>
  );
}
