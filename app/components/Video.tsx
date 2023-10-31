const Video = ({ id }: { id: string }) => {
  return (
    <div className="aspect-video">
      <iframe
      className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}
export default Video
