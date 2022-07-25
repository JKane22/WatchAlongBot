export default function ChannelSelectComponent({
  guild,
  user,
}: {
  guild: any;
  user: any;
}) {
  return (
    <div style={{ backgroundColor: '#3c3e4a' }}>
      {guild.map((guild: any) => (
        <h1>🎉 Welcome <p style={{ fontWeight: "bold" }}>{guild.name}</p> to WatchAlong! 🎉</h1>
      ))}
    </div>
  );
}
